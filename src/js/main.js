var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('usertext');
var chat_container = document.getElementById('chat_container');

const API_KEY = "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"
const API_URL = "https://api.openai.com/v1/chat/completions";

var user = { message: "" };

sendChatBotMessage("Hello! How can I assist you today?");

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
    var response = "w̵̧̡͓̰̰̟̗̫̟̱̣̫͐̄͒̍̄̍̍͒̃͠͝ḩ̴̡̛̣̱̝̖̮̬̺̫͈̊̏̀̿̍̐̀̕͝͝ą̴̠̘̪̥̒͐́̑t̸̢̨̺͙̭̟̲̪͖̟͕̖̠̀͊͌͛͑͊̇̋͆̄̚ͅ";

    setTimeout(function() {
        sendChatBotMessage(response);
    }, 1000);
}