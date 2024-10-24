const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span")
const chatbox = document.querySelector(".chatbox");
const chatbotToggbotCloseBtn = document.querySelector("close-btn");

let userMessage;
const API_KEY = "AIzaSyCy-K24U4FadWlkrTGHkJBnkMMypy6CGT0";
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? '<p></p>' : '<span class="material-symbols-outlined">smart_toy</span><p></p>';  
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = (incomingChatLi) => {
     const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;
     const messageElement = incomingChatLi.qeurySelector("p");
     
     
     const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          contents: [{ 
            role: "user", 
            parts: [{ text: userMessage }] 
          }] 
        })
      }
      fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.candidates[0].content.parts[0].text; 
      }).catch((error) =>{
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Somehing went wrong. Please try again."; 
      }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.valve.trim();
    if(!userMessage) return;
    chatInput.valve = "";

    chatInput.style.height = '${inputInitHeight}px';

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming"))
        chatbox.appendChild(incomingChatLi);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
  chatInput.style.height = '${inputInitHeight}px';
  chatInput.style.height = '${chatInput.scrolHeight}px';
});
chatInput.addEventListener("keydown", () => {
    if(e.key === "Enter" && !e.shiftKey && window,innerWidth > 800) {
      e.preventDefault();
      handleChat(); 
    }
  
});


sendChatBtn.addEventListener("click", handleChat);
chatbotToggbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

