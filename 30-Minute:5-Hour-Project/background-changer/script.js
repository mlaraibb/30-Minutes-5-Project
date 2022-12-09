const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    document.body.style.background = randomBackground();
    console.log(randomBackground());
});

function randomBackground(){
    return `hsl(${Math.floor(Math.random()* 360)}, 100%, 50%)`
}

