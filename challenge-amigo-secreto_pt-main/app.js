let amigos = [];


function inserirNome() {
    return document.querySelector('input').value; //captura o valor inserido no campo texto
}

function limparTexto(){
    let limpaTexto = document.querySelector('input');
    limpaTexto.value = '';
}
function adicionarAmigo(){
    if (amigos.includes(inserirNome())){
        alert("Este nome já existe na lista, favor inclua outro.")
        limparTexto();
        console.log(amigos)

    } else if (!document.querySelector('input').value.trim()){
        alert('Por favor, insira um nome válido');
        console.log(amigos)
        limparTexto()
    
    } else {
        insereAmigosLista()
        console.log(amigos)
    }
}

function insereAmigosLista(){
    amigos.push(inserirNome()); //insere na lista de amigos

        let lista = document.getElementById('listaAmigos').innerHTML + "<li>" + inserirNome() + "</li>"; 
        //variável que entra na ID lista e abre para alteração e insere o novo nome na lista

        document.getElementById('listaAmigos').innerHTML = lista;
        //altera a lista e mostra ela atualizada
        limparTexto()
}

//verificar se há mais de 1 amigo
function sortearAmigo(){
    if (amigos.length == 1) {
        alert("Não há amigos suficiente para sorteio, adicione mais um.");
        limparTexto();
    } else {
        sorteado = parseInt(Math.random() * amigos.length);
        return document.getElementById('resultado').innerHTML = amigos[sorteado]; ;
    }
}
