document.addEventListener("DOMContentLoaded", function () {
    const chatbot = document.getElementById("chatbot");
    function sendMessage(message) {
        const messageBubble = document.createElement("div");
        messageBubble.className = "message-bubble";
        messageBubble.textContent = message;
        chatbot.appendChild(messageBubble);
    }
    sendMessage("Hello! How can I assist you?");
});

document.addEventListener("DOMContentLoaded", function () {
    const chatbot = document.getElementById("chatbot");
    const chatIcon = document.getElementById("chat-icon");
    const closeIcon = document.getElementById("close-icon");
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    let chatbotActive = false;
    function sendMessage(message, isUser = false) {
        const messageBubble = document.createElement("div");
        messageBubble.className = isUser ? "user-message" : "bot-message";
        messageBubble.textContent = message;
        chatMessages.appendChild(messageBubble);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    function toggleChatbot() {
        chatbotActive = !chatbotActive;
        chatbot.classList.toggle("active", chatbotActive);
    }
    chatIcon.addEventListener("click", toggleChatbot);
    closeIcon.addEventListener("click", toggleChatbot);
    function handleUserInput() {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            sendMessage(userMessage, true);
            fetchAnswer(userMessage);
            userInput.value = "";
        }
    }
    sendButton.addEventListener("click", handleUserInput);
    userInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });
    function fetchAnswer(question) {
        fetch(`/get_answer?question=${encodeURIComponent(question)}`)
            .then((response) => response.json())
            .then((data) => {
                const answer = data.answer;
                sendMessage(answer);
            })
            .catch((error) => {
                console.error("Error fetching answer:", error);
            });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById("chat-icon");
    const closeIcon = document.getElementById("close-icon");
    const chatDialog = document.getElementById("chat-dialog");
    chatIcon.addEventListener("click", () => {
        chatDialog.style.display = "block";
    });
    closeIcon.addEventListener("click", () => {
        chatDialog.style.display = "none";
    });

});
document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById("chat-icon");
    const closeIcon = document.getElementById("close-icon");
    const chatDialog = document.getElementById("chat-dialog");
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    chatIcon.addEventListener("click", () => {
        chatDialog.style.display = "block";
    });
    closeIcon.addEventListener("click", () => {
        chatDialog.style.display = "none";
    });
    function sendMessage(message, isUser = false) {
        const messageBubble = document.createElement("div");
        if (isUser) {
            messageBubble.className = "user-message";
        } else {
            messageBubble.className = "bot-message";
        }
        messageBubble.textContent = message;
        chatMessages.appendChild(messageBubble);
        chatMessages.scrollTop = chatMessages.scrollHeight; 
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById("chat-icon");
    const closeIcon = document.getElementById("close-icon");
    const chatDialog = document.getElementById("chat-dialog");
    const messageBox = document.getElementById("message-box");
    function hideMessageBox() {
        messageBox.style.display = "none";
    }
    messageBox.style.display = "block";
    chatIcon.addEventListener("click", hideMessageBox);

});


