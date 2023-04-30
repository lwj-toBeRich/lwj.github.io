const clock = document.querySelector("#clock");

function realTime(){
    const date = new Date();
    date.getFullYear();
    let padHours = String(date.getHours()).padStart(2,0);
    let padMinutes = String(date.getMinutes()).padStart(2,0);
    let padSeconds = String(date.getSeconds()).padStart(2,0);
    
    clock.innerHTML = padHours+ " : "+padMinutes+ " : "+padSeconds;
}

realTime();
setInterval(realTime, 1000);