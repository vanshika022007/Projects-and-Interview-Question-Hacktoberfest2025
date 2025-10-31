const chatContainer = document.querySelector(".chat-messages");
const inputField = document.querySelector(".chat-input-area input");
const sendBtn = document.querySelector(".chat-input-area button");

const GEMINI_API_KEY = "AIzaSyB75ej5MTR4-vdQv8rpZNA-tDTUDCGRNW8";

// Handle button click
sendBtn.addEventListener("click", () => {
  const userInput = inputField.value.trim();
  if (userInput !== "") {
    addMessage("user", userInput);
    inputField.value = "";
    generateReply(userInput);
  }
});

// Handle enter key
inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});

// Add message to chat
function addMessage(type, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", type === "user" ? "user-message" : "bot-message");
  msg.textContent = text;
  chatContainer.appendChild(msg);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Generate reply using Gemini API
async function generateReply(userInput) {
  addMessage("bot", "Thinking... 🤖");

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userInput }] }],
        }),
      }
    );

    const data = await res.json();

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Hmm... I couldn't come up with a reply";

  
    const botMessages = document.querySelectorAll(".bot-message");
    const lastMsg = botMessages[botMessages.length - 1];
    lastMsg.textContent = reply;

  } catch (error) {
    const botMessages = document.querySelectorAll(".bot-message");
    const lastMsg = botMessages[botMessages.length - 1];
    lastMsg.textContent = "Oops! Something went wrong";
    console.error("Gemini API Error:", error);
  }
}
