package com.api.pessoas.gerenciamento.security;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

public class JwtValidateFilter extends BasicAuthenticationFilter{

    public static final String HEADER_ATTRIBUTE = "Authorization";
    public static final String PREFIX_ATTRIBUTE = "Bearer ";

    public JwtValidateFilter(AuthenticationManager authenticationManager) {
        super(authenticationManager);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws IOException, ServletException {
            
            String header = request.getHeader(HEADER_ATTRIBUTE);
            if(header == null || !header.startsWith(PREFIX_ATTRIBUTE)) {
                chain.doFilter(request, response);
                return;
            }

            UsernamePasswordAuthenticationToken authenticationToken = getAuthenticationToken(header.replace(PREFIX_ATTRIBUTE, ""));
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            chain.doFilter(request, response);
    }

    private UsernamePasswordAuthenticationToken getAuthenticationToken(String token){
        String username = JWT.require(Algorithm.HMAC512(JwtAuthenticationFilter.TOKEN_PASSWORD)).build().verify(token).getSubject();

        if(username == null) {
            return null;
        }

        return new UsernamePasswordAuthenticationToken(username, null, new ArrayList<>());
    }
    
}
