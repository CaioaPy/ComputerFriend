var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('usertext');
var chat_container = document.getElementById('chat_container');

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI({API_KEY: AIzaSyBBifhvL36gsmvfDrNvadGnUkotyQVVoZE});

async function run(userMessage) {
    try {
        const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});
        const result = await model.generateContent({prompt: userMessage});
        const response = await result.json();
        return response.generations[0].text;
    } catch (error) {
        console.error("Error generating AI content:", error);
        return "Sorry, I couldn't process your message.";
    }
}
var user = { message: "" };

sendChatBotMessage("Hello! How are you today?");

function sendChatBotMessage(messageText) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50', 'float-left');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = `<span>Computer Friend: </span>
    <span style="margin-top:10px; padding:5px">${messageText}</span>`;

    messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 350 });

    chat_container.appendChild(messageElement);
}

function sendMessage(messageText) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50', 'float-left');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";
    messageElement.innerHTML = `<span>Me: </span>
    <span style="margin-top:10px; padding:5px">${messageText}</span>`;

    messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 350 });

    chat_container.appendChild(messageElement);
}

sendBtn.addEventListener('click', function(e) {
    if (textbox.value.trim() === "") {
        alert('You need to write something to chat with Computer Friend!');
    } 
    else {
        let messageText = textbox.value;    
        sendMessage(messageText);
        textbox.value = "";
        processMessage();
    }
});

async function processMessage(userMessage) {
    var response = await run(userMessage);
        sendChatBotMessage(response);
}