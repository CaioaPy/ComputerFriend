var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('usertext');
var chat_container = document.getElementById('chat_container');

var user = {message:""};
var arrayOfMessages = [
    {"message": "how are you?", "response":"im fine"},
    {"message": "hi", "response":"heyoo!"},
    {"message": "hello", "response":"heloo :3"},
    {"message": "what's up?", "response": "Not much, just here to help! How about you?"},
    {"message": "what time is it?", "response": "I don't have a clock, but you can check the time on your device!"},
    {"message": "can you help me with math?", "response": "Absolutely! What math problem are you working on?"},
    {"message": "tell me a joke", "response": "Why don't programmers like nature? It has too many bugs!"},
    {"message": "what's your favorite color?", "response": "I don't have preferences, but I think blue is pretty cool!"},
    {"message": "how old are you?", "response": "I'm as old as the latest update, but I'm always learning and growing!"},
    {"message": "what can you do?", "response": "I can help answer questions, provide information, and chat with you about a wide range of topics!"},
    {"message": "goodbye", "response": "Catch you later! Have a great day!"},
    {"message": "what's your name?", "response": "I'm Computer Friend, your friendly virtual assistant!"},
    {"message": "do you like music?", "response": "I don't have ears, but I can help you find great music to listen to!"}
];

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

    messageElement.animate([{easing:"ease-in", opacity:0.4},{opacity:1}],{duration:350});
    
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

    messageElement.animate([{easing:"ease-in", opacity:0.4},{opacity:1}],{duration:350});

    chat_container.appendChild(messageElement);
}

sendBtn.addEventListener('click', function(e){
    if (textbox.value == ""){
        alert('Você precisa escrever alguma coisa para conversar com o Computer Friend!')
    }
    else{
        let messageText = textbox.value;    
        sendMessage(messageText);
        textbox.value = "";
        user.message = messageText;
        processMessage();

    }
});

function processMessage(){
    if(user.message.length > 5)

    var result = arrayOfMessages.filter(val=> val.message.includes(user.message.toLowerCase()));

    var response = result[0].response;

    if (result.length > 0){
        setTimeout(function(){
            sendChatBotMessage(response);
        }, 1000);
    }else{
        setTimeout(function(){
            sendChatBotMessage("w̵̧̡͓̰̰̟̗̫̟̱̣̫͐̄͒̍̄̍̍͒̃͠͝ḩ̴̡̛̣̱̝̖̮̬̺̫͈̊̏̀̿̍̐̀̕͝͝ą̴̠̘̪̥̒͐́̑t̸̢̨̺͙̭̟̲̪͖̟͕̖̠̀͊͌͛͑͊̇̋͆̄̚ͅ");
        }, 1000);
    }
}