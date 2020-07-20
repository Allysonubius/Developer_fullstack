var botaoSubmit = document.querySelector("#Enviar");
botaoSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#alunos-form");
    var aluno = obtemAlunoFormulario(form);
    // var alunoTr = montarTr(aluno);
    // var tabela = document.querySelector("#alunos-tabela");
    var error = validaAluno(aluno);
    if (error.length > 0) {
        exibeMensagemErro(error);
        return;
    }
    adicionaAlunoTabela(aluno);
    form.reset();
    var mensagemError = document.querySelector("#mensagem");
    mensagemError.innerHTML = "";
});

function adicionaAlunoTabela(aluno) {
    var alunoTr = montarTr(aluno);
    var tabela = document.querySelector("#alunos-tabela");
    tabela.appendChild(alunoTr);
}

function validaAluno(aluno) {
    var erros = [];

    if (aluno.nome.length == 0) erros.push("O nome não pode ser em branco !");
    if (aluno.sobrenome.length == 0) erros.push("O sobrenome não pode ser em branco !");
    if (aluno.participação.length == 0) erros.push("O nome não pode ser em branco !");

    return erros;
}

function obtemAlunoFormulario(form) {
    var aluno = {
        nome: form.nome.value,
        sobrenome: form.sobrenome.value,
        participação: form.participação.value
    }
    return aluno;
}

function montarTd(dado, classe) {
    //Cria a TD
    var td = document.createElement("td");
    //Adiciona a classe
    td.classList.add(classe)
        //Adiciona o dado
    td.textContent = dado;

    return td;
}

function montarTr(aluno) {
    //Cria a TR
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");
    //Cria as TD's e as adiciona dentro
    alunoTr.appendChild(montarTr(aluno.nome, "info-nome"));
    alunoTr.appendChild(montarTr(aluno.sobrenome, "info-sobrenome"));
    alunoTr.appendChild(montarTr(aluno.participação, "info-participação"));

    return alunoTr;
}

//Cria uma li dentro daul para cada erro encontrado
function exibeMensagemErro(error) {
    var ul = document.querySelector("mensagem");
    ul.innerHTML = "";

    error.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}