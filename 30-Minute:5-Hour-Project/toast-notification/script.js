
const btn = document.getElementById('btn');
const container = document.getElementById('container');


btn.addEventListener('click',()=>{
    createNotification();
});


function createNotification(){
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = 'The challenge is crazy';

container.appendChild(notif);

setInterval(()=>{
    notif.remove();
},300)
}

