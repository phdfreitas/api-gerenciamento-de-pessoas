package com.api.pessoas.gerenciamento.repository;

import com.api.pessoas.gerenciamento.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

    @Query("select p from Pessoa p join fetch p.roles where p.email=(:email)")
    public Pessoa findByEmail(@Param("email") String email);
}
