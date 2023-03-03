package com.api.pessoas.gerenciamento.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.api.pessoas.gerenciamento.jwt.UserDetailsImpl;
import com.api.pessoas.gerenciamento.model.Pessoa;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter{
    
    public static final int TOKEN_EXPIRATION = 600000;

    public static final String TOKEN_PASSWORD = "005b02b4-824e-40d3-a46d-b85034e4c253";

    private final AuthenticationManager authenticationManager;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {
            
        // Faz o parse do JSON para o objeto Pessoa
        try {
            Pessoa pessoa = new ObjectMapper().readValue(request.getInputStream(), Pessoa.class);

            return authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(pessoa.getEmail(), pessoa.getSenha(), new ArrayList<>())
            );
        } catch (IOException e) {
            throw new RuntimeException("Não foi possível autenticar o usuário ", e);
        }
    }

    @Override
    protected void successfulAuthentication(
        HttpServletRequest request, 
        HttpServletResponse response, 
        FilterChain chain,
        Authentication authResult) 
        throws IOException, ServletException {

            UserDetailsImpl userDetailsImpl = (UserDetailsImpl) authResult.getPrincipal();

            String token = JWT.create()
                            .withSubject(userDetailsImpl.getUsername())
                            .withExpiresAt(new Date(System.currentTimeMillis() + TOKEN_EXPIRATION))
                            .sign(Algorithm.HMAC512(TOKEN_PASSWORD));
        
        // Registra o token no corpo da página
        response.getWriter().write(token);
        response.getWriter().flush();
    }

    

    
}
