function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var chatOutput = document.getElementById('chat-output');

    var messageText = messageInput.value.trim();

    if (messageText !== '') {
        var messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = messageText;

        chatOutput.appendChild(messageElement);

        // Efface le champ de saisie
        messageInput.value = '';

        // Fait défiler la fenêtre de chat vers le bas pour voir le nouveau message
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }
}