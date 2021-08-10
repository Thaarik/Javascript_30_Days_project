

function playSound(sound){
    const audio = document.querySelector(`audio[data-key="${sound.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${sound.keyCode}"]`);
    if(audio===null)return;   
    audio.currentTime=0; 
    audio.play();
   key.classList.add('playing')
    }

    const keys = document.querySelectorAll(".key");
    keys.forEach(key=>{
        key.addEventListener("transitionend",removeTransition)
        // key.addEventListener("click",removeTransition)
        
    })
  
    function removeTransition(e){
        if(e.propertyName!=='transform')return;
        this.classList.remove("playing");//removes playing class in "key" class elements
    }
    window.addEventListener('keydown',playSound);
    