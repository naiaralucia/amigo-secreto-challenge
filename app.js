let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('#amigo').value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    amigos.push(nome);
    document.querySelector('#amigo').value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)]; 
    document.querySelector('#resultado').textContent = `O amigo secreto é: ${sorteado}`;

    document.querySelector('#listaAmigos').style.display = "none"; 
}
