var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('usertext');
var chat_container = document.getElementById('chat_container');


const { Configuration, OpenAIApi } = require('openai');

// Create an instance of the OpenAIApi class by passing a configuration object
const openai = new OpenAIApi(new Configuration({
    apiKey: "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"
}));

// Define a function to generate text
const generateText = async (prompt) => {
    const response = await openai.createCompletion({
        model: 'gpt-4o-mini', 
        prompt: prompt, 
        temperature: 1, 
        max_tokens: 800,
    });

    // Return the generated text from the response
    return response.choices[0].text;
}

const API_URL = "https://api.openai.com/v1/chat/completions";

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
        user.message = messageText;
        processMessage();
    }
});

function processMessage() {
    var response = generateText(prompt);

    setTimeout(function() {
        sendChatBotMessage(response);
    }, 1000);
}