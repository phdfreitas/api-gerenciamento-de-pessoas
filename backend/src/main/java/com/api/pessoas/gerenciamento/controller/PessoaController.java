package com.api.pessoas.gerenciamento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.pessoas.gerenciamento.model.Endereco;
import com.api.pessoas.gerenciamento.model.Pessoa;
import com.api.pessoas.gerenciamento.service.impl.PessoaServiceImpl;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Pessoas end point", description = "Gerenciamento de Pessoas")
@RestController
@RequestMapping("/pessoas")
@CrossOrigin("http://localhost:3000")
public class PessoaController {

    @Autowired
    private PessoaServiceImpl pessoaService;

    @Operation(summary = "Cadastrar nova pessoa")
    @PostMapping("/cadastrarNova")
    public Pessoa salvaPessoa(@RequestBody Pessoa pessoa){
        return pessoaService.salvaPessoa(pessoa);
    }

    @GetMapping("/listarTodas")
    public List<Pessoa> listaDePessoas(){
        return pessoaService.listaDePessoas();
    }

    @GetMapping("/consultar/{id}")
    public Pessoa consultaPessoa(@PathVariable Long id){
        return pessoaService.consultaPessoa(id);
    }

    @PutMapping("atualizarDados/{id}")
    public Pessoa atualizaDadosPessoa(@PathVariable Long id, @RequestBody Pessoa pessoa){
        return pessoaService.atualizaDadosPessoa(id, pessoa);
    }

    @PostMapping("adicionarNovoEndereco/{id}")
    public Pessoa adicionaNovoEndereco(@PathVariable Long id, @RequestBody Endereco endereco){
        return pessoaService.adicionaNovoEndereco(endereco, id);
    }

    @GetMapping("enderecos/{id}")
    public List<Endereco> enderecosPessoa(@PathVariable Long id){
        return pessoaService.listaEnderecosPessoa(id);
    }
}
