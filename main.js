import {estado} from "./store.js";

const form = document.forms.entrada;
form.addEventListener('submit', envia);



atualiza();  //coloca o valor no inicio quando abre a pagina

function envia(evento) {
    evento.preventDefault();
    console.log('Formulário enviado!');
    estado++;
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol'); 
    ol.innerHTML = `<li>${estado}</li>`;  // mudei o html do elemento
}