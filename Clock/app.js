const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");
const allHands = document.querySelectorAll('.hand')

function setDate() {
    
    const now = new Date();

    //seconds hand
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360 + 90);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //minute hand
    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360 + 90);
    minuteHand.style.transform = `rotate(${minsDegree}deg)`;

    //hour hand
    const hours = now.getHours();
    const hoursDegree = ((hours / 60) * 360 + 90);
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    //    to stop resetting the position pf all hands striking 90 degrees
    if (secondsDegrees === 90) {
        allHands.forEach(hand => hand.style.transition = 'none')
    } else {
        allHands.forEach(hand => hand.style.transition = '')
    }
}

//to run every second
setInterval(setDate, 1000);