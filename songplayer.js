var sound = new Howl({
  src: ['ah.mp3']
});

var play = document.querySelector("#play");
var pause = document.querySelector("#pause");
play.addEventListener("click", function(){
    sound.play();
})
pause.addEventListener("click",function(){
    sound.pause();
})
