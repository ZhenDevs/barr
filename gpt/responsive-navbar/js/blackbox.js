function sendMessage() {
    var bbox = document.getElementById("bbox").value;
    var chatHistory = document.getElementById("chat-history");
    
    // Add user's message
    var userMessage = document.createElement("div");
    userMessage.classList.add("chat-message", "user-message");
    userMessage.innerText = "Pertanyaan: " + bbox;
    chatHistory.appendChild(userMessage);

    // Kirim permintaan ke API dan tampilkan balasan
    fetch("https://vihangayt.me/tools/blackboxv4?q=" + encodeURIComponent(bbox))
        .then(response => response.json())
        .then(data => {
            var responseMessage = document.createElement("div");
            responseMessage.classList.add("chat-message", "bot-message");
            responseMessage.innerText = "blackbox: " + data.data;
            chatHistory.appendChild(responseMessage);
        })
        .catch(error => console.error('Error:', error));
        
    document.getElementById("bbox").value = "";
    return false; // Hindari pengiriman formulir
}
