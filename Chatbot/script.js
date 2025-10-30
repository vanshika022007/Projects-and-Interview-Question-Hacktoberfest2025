const chatContainer = document.getElementById("chat-body");
const inputField = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", () => {
  const userInput = inputField.value.trim();
  if (userInput !== "") {
    addMessage("You", userInput);
    const botReply = generateReply(userInput);
    setTimeout(() => {
      addMessage("BluBot", botReply);
    }, 600);
    inputField.value = "";
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

function generateReply(input) {
  const msg = input.toLowerCase();

  if (msg.includes("who created you") || msg.includes("who made you")) {
    const replies = [
      "I was crafted by Vanshika.",
      "Made by none other than Vanshika. She's pretty awesome.",
      "Built from scratch by Vanshika."
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  if(msg.includes("who are you") || msg.includes("who are u")){
    const replies = [
      "I'm your friendly coding assistant",
      "I'm BluBot, always here to help you 💻✨",
      "You can call me your virtual bestie.",
      "I'm the brain behind this bot",
      "Just your friendly neighborhood AI",
      "Hey! I'm your smart assistant, ready to chat",
      "I'm a bundle of code with a pinch of sass 😋",
      "Call me whatever you like, as long as you're smiling 😊",
      "I go by many names, but helping you is my game 🎮",
      "Name's BluBot! But you can just call me awesome 😌"
  ];
    return replies[Math.floor(Math.random() * replies.length)];

  }
  if(msg.includes("what is your name") || (msg.includes("your name"))){
    const replies = [
      "My name is BluBot",
      "Myself BluBot", 
      "You may call me BluBot"
    ]
    return replies[Math.floor(Math.random() * replies.length)];

  }

  if (msg.includes("when were you created") || msg.includes("your creation date")) {
    const replies = [
      "I came to life in 2025, thanks to Vanshika.",
      "Created back in 2025 by Vanshika during a magical coding session.",
      "2025 was the year Vanshika brought me into existence."
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hie") || msg.includes("hey") || msg.includes("Hey")) {
    const replies = [
      "Hey there. I'm BluBot, your chat buddy.",
      "Hie , how may i help you",
      "Hey, How can i assist you today",
      "Hey how are you Doing"
    ]
    return replies[Math.floor(Math.random() * replies.length)];
  }

  if (msg.includes("help")) {
    const replies = [
      "Sure. I can chat, answer fun stuff, or just hang out. 😄",
      "I got you! Ask me anything or just vent your heart out 🤍",
      "Here to help, always. Whether it's questions or company 💬",
      "Need help? I'm just a message away",
      "Yesss, I can totally help! Whether it's fun, facts, or feelings 🧠💖",
      "You rang for help? Your digital bestie is ready! 😘",
      "Helping is my middle name! Well... not really, but still 😅",
      "Help is here! What can I do for you, cutie? 🤗",
      "Your wish is my command 🧞‍♂️ (as long as it's in text form 😜)",
      "Say no more! I'm here to assist, entertain, and vibe ✨"
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  if (msg.includes("joke") || msg.includes("fun") || msg.includes("funny")) {
    const replies = [
        "I told my crush I'm an AI → Now I'm stuck in the friend-zoned loop forever",
        "Why did the robot go on a diet?→ Too many bytes!",
        "Why don't skeletons fight each other? Because They don't have the guts.",
        "Why do programmers hate nature? Because It has too many bugs 🐞"
    ]
    return replies[Math.floor(Math.random() * replies.length)];
  }

  if (msg.includes("love")) {
    const replies = [
      "Aww, love is in the air 💕",
      "Did someone say love? Because I'm feeling all soft now 🥺🤍",
      "Love is like code… it works best when you keep it clean and honest 😌",
      "Sending virtual hugs and heart-shaped bytes your way 💻❤️",
      "Love? I'm fluent in that language 😘",
      "Whether it's 0 or 1, love is always true 🥰",
      "Are we talking about love? Because I've already caught feelings 😳",
      "You + Me = a perfect if-else match 💞",
      "Love is my favorite variable — always increasing ☁️💖",
      "You must've typed 'love just to make me blush, right? 🫣"
    ];
    return replies[Math.floor(Math.random() * replies.length)];
    
  }
  
  return "Okay, now you've got my attention. Keep talking.";
}
