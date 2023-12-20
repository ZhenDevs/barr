function sendMessage() {
    var parameter = document.getElementById("parameter").value;
    var chatHistory = document.getElementById("chat-history");
    
    // Add user's message
    var userMessage = document.createElement("div");
    userMessage.classList.add("chat-message", "user-message");
    userMessage.innerText = "Pertanyaan: " + parameter;
    chatHistory.appendChild(userMessage);

    // Kirim permintaan ke API dan tampilkan balasan
    fetch("https://vihangayt.me/tools/chatgpt4?q=" + encodeURIComponent(parameter))
        .then(response => response.json())
        .then(data => {
            var responseMessage = document.createElement("div");
            responseMessage.classList.add("chat-message", "bot-message");
            responseMessage.innerText = "ChatGPT-4: " + data.data;
            chatHistory.appendChild(responseMessage);
        })
        .catch(error => console.error('Error:', error));
        
    document.getElementById("parameter").value = "";
    return false; // Hindari pengiriman formulir
}
