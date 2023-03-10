package com.api.pessoas.gerenciamento.repository;

import com.api.pessoas.gerenciamento.model.Pessoa;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

    public Optional<Pessoa> findByEmail(String email);

    @Query("SELECT p from Pessoa p WHERE p.email=(:email)")
    Pessoa getByEmail(@Param("email") String email);
}
