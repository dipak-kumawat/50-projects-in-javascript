let process = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIon = document.getElementById("control");


song.onloadedmetadata = function(){
    process.max = song.duration;
    process.value = song.currentTime;
}

function playPause(){
    if(ctrlIon.classList.contains("fa-pause")){
        song.pause();
        ctrlIon.classList.remove("fa-pause");
        ctrlIon.classList.add("fa-play");
    }else {
        song.play();
        ctrlIon.classList.remove("fa-play");
        ctrlIon.classList.add("fa-pause");
    }  
}

if(song.play()){
    setInterval(()=>{
        process.value = song.currentTime;
    },100);
}

process.onchange = function(){
    song.play();
    song.currentTime = process.value;
    ctrlIon.classList.remove("fa-play");
    ctrlIon.classList.add("fa-pause");
}