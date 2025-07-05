const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');

function appendMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message ' + sender;
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.textContent = text;
  messageDiv.appendChild(bubble);
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botReply(message) {
  const msg = message.toLowerCase();
  if (msg.includes('hello') || msg.includes('hi')) {
    return "Hello! How can I help you today?";
  } else if (msg.includes('your name')) {
    return "I'm your friendly chatbot!";
  } else if (msg.includes('help')) {
    return "Sure, let me know what you need help with.";
  } else if (msg.includes('bye')) {
    return "Goodbye! Have a great day!";
  } else if (msg.includes('weather')) {
    return "I'm not connected to live weather data, but I hope it's nice where you are!";
  } else if (msg.includes('time')) {
    return "I can't tell the exact time, but you can check your device's clock!";
  } else if (msg.includes('who created you')) {
    return "I was created by Faisal Rauf!";
  } else if (msg.includes('how are you')) {
    return "I'm just code, but I'm here to help you!";
  } else if (msg.includes('joke')) {
    return "Why did the web developer leave the restaurant? Because of the table layout!";
  } else if (msg.includes('thank')) {
    return "You're welcome!";
  } else {
    return "Sorry, I didn't understand that. Can you rephrase?";
  }
}
chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const userMsg = userInput.value.trim();
  if (userMsg === '') return;
  appendMessage(userMsg, 'user');
  userInput.value = '';
  setTimeout(() => {
    const reply = botReply(userMsg);
    appendMessage(reply, 'bot');
  }, 600);
});

window.onload = () => {
  appendMessage("Hi! I'm your chatbot. Ask me anything.", 'bot');
};