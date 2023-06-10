package com.api.pessoas.gerenciamento.service.impl;

import com.api.pessoas.gerenciamento.model.Endereco;
import com.api.pessoas.gerenciamento.model.Pessoa;
import com.api.pessoas.gerenciamento.model.enums.TipoEndereco;
import com.api.pessoas.gerenciamento.repository.EnderecoRepository;
import com.api.pessoas.gerenciamento.repository.PessoaRepository;
import com.api.pessoas.gerenciamento.service.PessoaService;

import io.github.classgraph.Resource;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

@Service
public class PessoaServiceImpl implements PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    @Autowired
    private EnderecoRepository enderecoRepository;
    
    @Override
    public Pessoa salvaPessoa(Pessoa pessoa){

        pessoa.setSenha(passwordEncoder().encode(pessoa.getSenha()));
        pessoa.getRoles().add("USER");
        return pessoaRepository.save(pessoa);
    }

    @Override
    public List<Pessoa> listaDePessoas(){
        return pessoaRepository.findAll();
    }

    @Override
    public Pessoa consultaPessoa(Long id){
        return pessoaRepository.findById(id).get();
    }

    @Override
    public Pessoa atualizaDadosPessoa(Long id, Pessoa pessoa){
        Pessoa pessoaAtualizada = consultaPessoa(id);
        
        pessoaAtualizada.setNome(pessoa.getNome());
        pessoaAtualizada.setSobrenome(pessoa.getSobrenome());
        pessoaAtualizada.setDataDeNascimento(pessoa.getDataDeNascimento());

        return pessoaRepository.save(pessoaAtualizada);
    }
    
    @Override
    public Optional<Pessoa> findByEmail(String email) {
        return pessoaRepository.findByEmail(email);
    }

    @Override
    public Pessoa adicionaNovoEndereco(Endereco endereco, Long idPessoa){
        Pessoa pessoa = consultaPessoa(idPessoa);

        if(endereco.getTipoEndereco() == null)
            endereco.setTipoEndereco(TipoEndereco.SECUNDARIO);

        pessoa.getEnderecos().add(endereco);
        endereco.setPessoa(pessoa);

        enderecoRepository.save(endereco);

        return pessoaRepository.save(pessoa);
    }

    @Override
    public List<Endereco> listaEnderecos(Long idPessoa) {
        return consultaPessoa(idPessoa).getEnderecos();
    }

    @Override
    public byte[] gerarRelatorioPessoas() throws Exception {
        List<Pessoa> pessoas = listaDePessoas();

        //Get file and compile it
        File file = ResourceUtils.getFile("classpath:gerenciamento.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(pessoas);

        Map<String, Object> parameters = new HashMap<>();
        parameters.put("createdBy", "Gerenciamento de Pessoas");

        //Fill Jasper report
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, null, dataSource);
        //Export report
        return JasperExportManager.exportReportToPdf(jasperPrint);
    }

    private BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    public byte[] gerarRelatorioEnderecoPessoa(Long idPessoa) throws Exception {
        File file = ResourceUtils.getFile("classpath:report.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());

        Pessoa pessoa = consultaPessoa(idPessoa);
        Endereco endereco = pessoa.getEnderecos().stream().filter(end -> end.getTipoEndereco() == TipoEndereco.PRINCIPAL).findFirst().get();


        Map<String, Object> parameters = new HashMap<>();
        parameters.put("CEP", endereco.getCep());
        parameters.put("LOGRADOURO", endereco.getLogradouro());
        parameters.put("COMPLEMENTO", endereco.getComplemento());
        parameters.put("BAIRRO", endereco.getBairro());
        parameters.put("UF", endereco.getUf());
        parameters.put("CIDADE", endereco.getCidade());
        parameters.put("NUMERO", endereco.getNumero());
        parameters.put("USER_EMAIL", pessoa.getEmail());

        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, new JRBeanCollectionDataSource(pessoa.getEnderecos()));
        return JasperExportManager.exportReportToPdf(jasperPrint);
    }

    
}
