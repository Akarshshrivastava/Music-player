const icon = document.querySelector('.icon')
const song = document.querySelector('#song')
const active = document.querySelector('#active')

icon.addEventListener('click', function(){
    if(song.paused){
        song.play()
        icon.src = "./assets/pause.png"
        active.innerHTML = "Pause"
    }
    else{
        song.pause()
        icon.src = "./assets/playbutton.png"
        active.innerHTML = "Play"
    }
})