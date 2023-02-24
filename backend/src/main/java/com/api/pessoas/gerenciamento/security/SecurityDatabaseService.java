package com.api.pessoas.gerenciamento.security;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.api.pessoas.gerenciamento.model.Pessoa;
import com.api.pessoas.gerenciamento.repository.PessoaRepository;

@Service
public class SecurityDatabaseService implements UserDetailsService{

    @Autowired
    private PessoaRepository pessoaRepository;

    @Override
    public UserDetails loadUserByUsername(String email) {
        Pessoa pessoa = pessoaRepository.findByEmail(email);

        if(pessoa == null){
            throw new UsernameNotFoundException(email);
        }

        Set<GrantedAuthority> authorities = new HashSet<>();
        pessoa.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
        });

        UserDetails userDetails = new org.springframework.security.core.userdetails.User(pessoa.getEmail(), pessoa.getSenha(), authorities);

        return userDetails;

    }
    
}
