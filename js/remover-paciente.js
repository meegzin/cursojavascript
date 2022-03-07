var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 1500);
});

//Essa função remove o paciente através de um doubleclick