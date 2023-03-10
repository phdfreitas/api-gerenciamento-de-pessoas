package com.api.pessoas.gerenciamento.service.impl;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.api.pessoas.gerenciamento.jwt.UserDetailsImpl;
import com.api.pessoas.gerenciamento.model.Pessoa;
import com.api.pessoas.gerenciamento.repository.PessoaRepository;

@Component
public class UserDetailsServiceImpl implements UserDetailsService{

    private final PessoaRepository pessoaRepository;

    public UserDetailsServiceImpl(PessoaRepository pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        
        Optional<Pessoa> pessoa = pessoaRepository.findByEmail(email);

        if(pessoa.isEmpty()){
            throw new UsernameNotFoundException("Pessoa não encontrada" + email);
        }

        Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
        pessoa.get().getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
        });

        return new UserDetailsImpl(pessoa, authorities);
    }
    
}
