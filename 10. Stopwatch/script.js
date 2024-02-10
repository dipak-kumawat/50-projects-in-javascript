let [hours, minutes, second] = [0, 0, 0];
let displayTime = document.querySelector(".displayTime");
let timer = null;

function stopwatch(){
    if(second == 60){
        second = 0;
        minutes++;
        if(minutes == 60){
            hours++;
            minutes = 0;
        }
    }



    displayTime.innerHTML = hours + ":" + minutes +":"+ second;
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}