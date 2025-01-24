//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


function limparTexto(){
    let inserirNome = document.querySelector('input');
    inserirNome.value = '';
}
function insereAmigosLista(){
    let inserirNome = document.querySelector('input').value; //captura o valor inserido no campo texto
    amigos.push(inserirNome); //insere na lista de amigos

    let lista = document.getElementById('listaAmigos').innerHTML + "<li>" + inserirNome + "</li>"; 
    //variável que entra na ID lista e abre para alteração e insere o novo nome na lista

    document.getElementById("listaAmigos").innerHTML = lista;
    //altera a lista e mostra ela atualizada
}


function adicionarAmigo(){
    if (document.querySelector('input').value == "") {
        alert('Por favor, insira um nome válido')
    } else {
        insereAmigosLista();
        limparTexto();
        console.log(amigos);
    }
    

    // function sortearAmigo(){
    //    return parseInt(Math.random() * amigos.length + 1)
    // }
}
