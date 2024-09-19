var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('usertext');
var chat_container = document.getElementById('chat_container');

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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"

// Create an instance of the OpenAIApi class by passing a configuration object
// Define a function to generate text
const generateText = async (prompt) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                prompt: prompt,
                temperature: 1,
                max_tokens: 800
            })
        });
        const data = await response.json();
        return data.choices[0].text.trim();
    } catch (error) {
        console.error("Error while generating:", error);
        return "I'm sorry, something went wrong.";
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
        user.message = messageText;
        processMessage();
    }
});

async function processMessage() {
    var response = await generateText(user.message);

    setTimeout(function() {
        sendChatBotMessage(response);
    }, 1000);
}