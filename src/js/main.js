var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('usertext');
var chat_container = document.getElementById('chat_container');

sendChatBotMessage("heyooo");

function sendChatBotMessage(messageText){
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadown-sm');
    messageElement.style.margin="10px";
    messageElement.style.padding="5px";

    messageElement.innerHTML = "<span>Computer Friend: </span>" +
    "<span style="+"margin-top:10px; padding:5px"+">"+ messageText +"</span>";
    
    chat_container.appendChild(messageElement);
}

function sendMessage(messageText){
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadown-sm');
    messageElement.style.margin="10px";
    messageElement.style.padding="5px";

    messageElement.innerHTML = "<span>Me: </span>" +
    "<span style="+"margin-top:10px; padding:5px"+">"+ messageText +"</span>";
    
    chat_container.appendChild(messageElement);
}

sendBtn.addEventListener('click', function(e){
    if (textbox.value == ""){
        alert('Você precisa escrever alguma coisa para conversar com o Computer Friend!')
    }
    else{
        let messageText = textbox.value;    
        sendMessage(messageText);
    }
});