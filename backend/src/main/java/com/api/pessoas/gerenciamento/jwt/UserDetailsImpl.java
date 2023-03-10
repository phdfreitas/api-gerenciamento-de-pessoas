package com.api.pessoas.gerenciamento.jwt;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.api.pessoas.gerenciamento.model.Pessoa;

public class UserDetailsImpl implements UserDetails{

    private final Optional<Pessoa> pessoa;

    private final Collection<? extends GrantedAuthority> authorities;

    public UserDetailsImpl(Optional<Pessoa> pessoa, Collection<? extends GrantedAuthority> authorities) {
        this.pessoa = pessoa;
        this.authorities = authorities;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return pessoa.orElse(new Pessoa()).getSenha();
    }

    @Override
    public String getUsername() {
        return pessoa.orElse(new Pessoa()).getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;    
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    
}
