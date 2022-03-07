var pacientes = document.querySelectorAll(".paciente");

var botaoAdicionar = document.querySelector('#adicionar-paciente')

//Criação das váriaveis
//Create variables

for(var i = 0 ; i < pacientes.length ; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura")
    var tdImc = paciente.querySelector(".info-imc")

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if(!pesoEhValido){
        pesoEhValido = false;
        tdImc.textContent = 'Peso inválido';
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValido){
        alturaEhValido = false;
        tdImc.textContent = 'Altura inválida';
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValido && pesoEhValido){
        var imc = calculaImc(peso,altura)
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso>=0 && peso<=300){
        return true;
    } else{
        return false;
    }
}

function validaAltura(altura){
    if(altura>=1.1 && altura<= 2.3){
        return true;
    } else{
        return false;
    }
}


function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
//Validação dos pesos e altura, apenas.
//Validation of size and height

