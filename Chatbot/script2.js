const chatContainer = document.getElementById("chat-body");
const inputField = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const GEMINI_API_KEY = "AIzaSyB75ej5MTR4-vdQv8rpZNA-tDTUDCGRNW8";

sendBtn.addEventListener("click", () => {
  const userInput = inputField.value.trim();
  if (userInput !== "") {
    addMessage("You", userInput);
    inputField.value = "";
    generateReply(userInput);
  }
});

inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendBtn.click();
  }
});

function addMessage(sender, message) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("chat-message", sender === "You" ? "user" : "bot");
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatContainer.appendChild(messageDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
//how to send post request to server
//DOM and DOM events
async function generateReply(userInput) {
  addMessage("BluBot", "Thinking... 🤖");

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
      "Hmm... I couldn't come up with a reply 😅";


    const botMessages = document.querySelectorAll(".chat-message.bot");
    const lastBotMsg = botMessages[botMessages.length - 1];
    lastBotMsg.innerHTML = `<strong>BluBot:</strong> ${reply}`;
  } catch (error) {
    const botMessages = document.querySelectorAll(".chat-message.bot");
    const lastBotMsg = botMessages[botMessages.length - 1];
    lastBotMsg.innerHTML =
      "<strong>BluBot:</strong> Oops! Something went wrong 😓";
    console.error("Gemini API Error:", error);
  }
}
