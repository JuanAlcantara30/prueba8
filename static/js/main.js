function addMessage(text, isBot) {
    const chatBox = document.getElementById("chat-box");
    const div = document.createElement("div");
    div.innerText = text;
    div.className = "chat-bubble";
    if (!isBot) { div.style.background = "#dcf8c6"; div.style.marginLeft = "auto"; }
    chatBox.appendChild(div);
}

function handleChat() {
    const input = document.getElementById("chat-input");
    const text = input.value;
    if (!text) return;
    addMessage(text, false);
    input.value = "";
    setTimeout(() => addMessage("¡Entendido! Te agendaremos en breve. ✅", true), 1000);
}
