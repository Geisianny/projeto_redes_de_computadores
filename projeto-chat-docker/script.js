const socket = new WebSocket('ws://localhost:3000');

socket.onmessage = (event) => {
    const chatDiv = document.getElementById('chat');

    var leitor = new FileReader();
    leitor.onload = function(event) {
        var conteudoDoArquivo = event.target.result;

        var novoParagrafo = document.createElement("p");

        novoParagrafo.textContent = conteudoDoArquivo;

        chatDiv.innerHTML += `<p>${novoParagrafo.textContent}</p>`
    };

    leitor.readAsText(event.data)

    chatDiv.innerHTML += `<p>${mensagem}</p>`;
};

document.getElementById('send').addEventListener('click', () => {
    const messageInput = document.getElementById('message');
    const message = messageInput.value;
    socket.send(message);
    messageInput.value = '';

    const chatDiv = document.getElementById('chat');
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = message;
    novoParagrafo.classList.add("sent");
    chatDiv.appendChild(novoParagrafo);
});
