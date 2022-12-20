'use strict';

const roomName = JSON.parse(document.getElementById('room-name').textContent)
const user_username = JSON.parse(document.getElementById('user_username').textContent)

document.querySelector('#submit').onclick = function (e) {
    const messageInputDom = document.querySelector('#input')
    const message = messageInputDom.value
    chatSocket.send(JSON.stringify({
        'message': message,
        'username': user_username,
    }))
    messageInputDom.value = ''
}

const chatSocket = new WebSocket (
    'ws://' +
    window.location.host +
    '/ws/chat/' +
     roomName +
     '/'
)

chatSocket.onmessage = function (e) {
    const data = JSON.parse(e.data)
    document.querySelector('#msgbox').innerText += (data.username + ': ' + data.message + '\n')
}

const chatURL = 'http://127.0.0.1:8000/chat/api/chatlist/' + roomName + '/'
const upd_btn = document.getElementById("update_btn")
const element = document.querySelector(".chat_name")

async function updateChat(url, name) {
    await fetch(url, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name : name})
    })
    await fetch(url, {
        method: "DELETE",
    })
}

upd_btn.addEventListener('click', () => {
    let value = document.getElementById("changename").value
    updateChat(chatURL, value)
    console.log("Chat is updated with the name " + value)
    value = ''
})


