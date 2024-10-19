var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('usertext');
var chat_container = document.getElementById('chat_container');

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "sk-NUmP9wcbNPtnyaR76SI7VJk-zb6EjceguSxYd_MXC1T3BlbkFJtes9qFChpFHZF0-GrYixVrKEqCc6HGo3jnFXJYuFAA"

const generateText = async (prompt) => {
    try {
        const requestBody = {
            model: 'gpt-3.5-turbo',
            messages: [
                {role: "system", content: "You are a helpful assistant called 'Computer Friend'." },
                {role: "user", content: prompt},
            ],
            temperature: 1,
            max_tokens: 800
        };

        console.log("Making request to:", API_URL);
        console.log("Request body:", JSON.stringify(requestBody));

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify(requestBody)
        });
        
        const data = await response.json();
        console.log("Response data:", data); // Log the response

        if (data.choices && data.choices.length > 0) {
            return data.choices[0].message.content.trim();
        } else {
            console.error("No choices found in response:", data);
            return "I'm sorry, I didn't get a proper response.";
        }
    } catch (error) {
        console.error("Error while generating:", error);
        return "I'm sorry, something went wrong.";
    }
};

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
        sendChatBotMessage(response);
}
