var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('usertext');
var chat_container = document.getElementById('chat_container');

function sendMessage(messageText){
    var messageElement = document.createElement('div');
    messageElement.classlist.add('w-50');
    messageElement.classlist.add('float-left');
    messageElement.classlist.add('shadown-sm');
    messageElement.style.margin="10px"
    messageElement.style.padding="5px"

    messageElement.innerHTML = "<span>Me:</span>" +
                "<span style="+"margin-top:10px; padding:5px">+ messageText +"</span>";
    chat_container.appendChild(messageElement);
}

sendBtn.addEventListener('click', function(e){
    let messageText = textbox.value;
    sendMessage(messageText)

});