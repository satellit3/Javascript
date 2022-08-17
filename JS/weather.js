const API_KEY = "2a22f7b4a3615f53c3653c6e900b8bdf";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} /${data.main.temp} `;
    });
        
}

function onGeoError(){
    alert("cant find you. no weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


