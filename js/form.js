botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = obtemPacientedoFormulario(form);


    var erros = validaPaciente(paciente);

    if(erros.length>0){
        exibeMensagensErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var dadoInvalido = document.querySelector('#dado-invalido');
    dadoInvalido.innerHTML = ''
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
};

function exibeMensagensErro(erros){
    var ul = document.querySelector('#dado-invalido');
    ul.innerHTML = ""

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

//Essa função coloca a mensagem de erro no HTML

function obtemPacientedoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

//Essa função obtém os dados do paciente quando preenchido o formulário

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//Essa função monta a Tr no HTML

function montaTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

//Essa função monta a Td

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0) erros.push('Nome não pode estar em branco');

    if(!validaPeso(paciente.peso)) erros.push('Peso inválido');
    if(paciente.peso.length == 0) erros.push('Peso não pode estar em branco');

    if(!validaAltura(paciente.altura)) erros.push('Altura inválida');
    if(paciente.altura.length == 0) erros.push('Altura não pode estar em branco');

    if(paciente.gordura.length) erros.push('Gordura não pode estar em branco');

    return erros;
}

//Essa função verifica se os dados do formulário estão válidos

