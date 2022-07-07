const chatbox = document.getElementById('chat_box');

const messagebtn = document.getElementById('message_submit');

const messagebox = document.getElementById('message_input');

const video = document.getElementById('background-video');


messagebtn.addEventListener('click',(e)=>{
    e.preventDefault();

    var div = document.createElement('div');
    div.id="User_Message";
    div.tagName="div";
    div.className="message";

    var span = document.createElement('span');
    span.tagName="span";
    span.innerHTML="User";
    div.append(span);

    var p = document.createElement('p');
    p.tagName = "p";
    p.innerHTML = `${messagebox.value}`;

    div.append(p);

    chatbox.append(div);
});





