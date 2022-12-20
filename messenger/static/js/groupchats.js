'use strict';

const container = document.querySelector('#allchats_container')
const btn = document.querySelector('#btn_allchats')
const select = document.querySelector('#btn_switch')
const createbtn = document.querySelector('#btn_create')

async function getChatList(url) {
    let response = await fetch(url)
    if (response.ok) {
        let result = await response.json();
        return result
    } else {
        alert("Ошибка HTTP: " + response.status)
    }
}

async function deleteChat(url) {
    await fetch(url, {
        method: "DELETE",
    }).then(console.log('Chat is deleted!'))
}

btn.addEventListener('click', async () => {
    const reqResult = await getChatList('http://127.0.0.1:8000/chat/api/chatlist/')
    console.log('reqResult', reqResult)

    reqResult.forEach(element => {
        let name = element.name
        container.innerHTML += `<div class="chat_case">
            <div><a class="chat_link" href="http://127.0.0.1:8000/chat/${name}">${name}</a></div>
            <button id="delete${name}" class="btn_newchat">DELETE</button>
        </div>`
        })

    reqResult.forEach(element => {
        let name = element.name
        let chatURL = 'http://127.0.0.1:8000/chat/api/chatlist/' + name + '/'
        document.querySelector(`#delete${name}`).addEventListener('click', async () => {
            await deleteChat(chatURL)
        })
    })

    select.style.display = "block"
})

select.addEventListener('click', () => {
    if (container.style.display === "none") {
        container.style.display = "block"
    } else {
        container.style.display = "none"
    }
})

async function createNewChat(url, name) {
    console.log(name)
    await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name : name})
    })
}

createbtn.addEventListener('click', () => {
    let chatName = document.getElementById("chatName").value
    createNewChat('http://127.0.0.1:8000/chat/api/chatlist/', chatName)
    console.log (chatName + " created!")
})