const secHand = document.querySelector(".second-hand");
const minHand=  document.querySelector(".min-hand");

const hourHand=  document.querySelector(".hour-hand");


function setDate(){
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();


    const SecDeg = ((sec/60) * 360) + 90;
    const minDeg = ((min/60) * 360) + 90;
    const hourDeg = ((hr/12) * 360) + 90;
    secHand.style.transform = `rotate(${SecDeg}deg)`

    minHand.style.transform = `rotate(${minDeg}deg)`

    hourHand.style.transform = `rotate(${hourDeg}deg)`

    if(sec == 0){
        secHand.classList.add('notransition');
    }else{
        secHand.classList.remove('notransition');
    }

}

setInterval(setDate, 1000);

setDate();