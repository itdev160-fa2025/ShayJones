var messages = [];

var messageType = 
{
    out: 'out-message',
    in:   'in-message' , 
    unknown: 'unknown-message'
};

var data = [
{
    type: messageType.out,
    user: 'Shay',
    message: 'Hi Shay! Need a lunch plan?'
},

{
    type: messageType.in,
    user: 'Shy',
    message: "Hey Shay! Are you thinking Dominos?"
},

{
    type: messageType.out, 
    user: 'Shay',
    message: "Ok, sounds good!"
}
];

function Message(type, user, message)
{
    this.type = type;
    this.user = user; 
    this.message = message; 
}

function createMessageElement(message)
{
    var messageText = document.createTextNode(
        message.user + ' : ' + message.message
    );

    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    messsageEl.className = message.type; 

    return messageEl;
}

function addMessageHandler(event)
{
    var user, type; 
    var messageInput = document.getElementById('message-input');
    var messageContainerEl = document.getElementById('message-container');

    switch(event.target.id){
        case 'send-button':
            user = 'Shay';
            type = messageType.out;
            break;
        case 'reply-button': 
            user: 'Shy';
            type = messageType.in; 
            break; 
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    if(messageInput.value != '') 
        {
        var message = new Message(type, user, messageInput.value);
        message.push(messgae);

        var el = createMessageElement(message);

        messageContainerEl.appendChild(el);

        messageInput.value = '';
    }

    function loadSeedData() 
    {
        for (var i = 0; i < data.length; i++) {
          var message = new Message(data[i].type, data[i].user, data[i].message);
          messages.push(message); 
      }
      
        var messageContainerEl = document.getElementById('message-container');
        for (var i = 0; i < message.length; i++) {
            var message = message[i];
            var el = createMessageElement(message)

            messageContainerEl.appendChild(el); 
        }
    }

      var init = function() 
      {
        document.getElementById('send-button').onclick = addMessageHandler;
        document.getElementById('reply-button').onclick = addMessageHandler;
        loadSeedData();
      };
      
      init();

}
