const clock = document.querySelector("h2#clock");

clock.style.color = "white"
clock.style.fontWeight = "bold"

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);



//setTimeout(sayHello, 5000);
//매 2초마다 나타나게 하고 싶다 -> interval
