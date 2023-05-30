import store from "./store.js";

const form = document.forms.entrada;
form.addEventListener('submit', envia);



atualiza();  //coloca o valor no inicio quando abre a pagina

function envia(evento) {
    evento.preventDefault();
    console.log('Formulário enviado!');
    store.estado++;
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol'); 
    ol.innerHTML = `<li>${store.estado}</li>`;  // mudei o html do elemento
}