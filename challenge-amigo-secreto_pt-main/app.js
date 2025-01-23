//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


function limparTexto(){
    let inserirNome = document.querySelector('input');
    inserirNome.value = '';
}

function adicionarAmigo(){
    if (document.querySelector('input').value == "") {
        alert('Por favor, insira um nome válido')
    } else {
        let inserirNome = document.querySelector('input').value;
        amigos.push(inserirNome);
        limparTexto();
        console.log(amigos);
    }
    

    // function sortearAmigo(){
    //    return parseInt(Math.random() * amigos.length + 1)
    // }
}
