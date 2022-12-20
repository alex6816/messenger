'use strict';

const container = document.querySelector('#userlist_container')
const btn = document.querySelector('#btn_users')
const select = document.querySelector('#btn_switch')

async function getMemberList(url) {
    let response = await fetch(url,  {
        method: "GET",
        mode: "no-cors",
    })
    if (response.ok) {
        let result = await response.json();
        return result
    } else {
        alert("Ошибка HTTP: " + response.status)
    }
}

btn.addEventListener('click', async () => {
    const reqResult = await getMemberList('http://127.0.0.1:8000/account/members/')
    console.log('reqResult', reqResult)

    reqResult.forEach(element => {
        let name = element.name
        let pic = element.avatar
        container.innerHTML += `<div class="user_data">
        <img class="avatar" src="${pic}" >
        <a class="username" href="http://127.0.0.1:8000/private/${name}">${name}</a>
        </div>`
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