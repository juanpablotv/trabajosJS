const UrlBase = "https://api.openweathermap.org/data/2.5/weather?";
const Apikey = "baa6d5c4a98f5d31e7688c2abe045d95"

const inputCity = document.querySelector("#city");
const btnBuscar = document.querySelector("#btnBuscar");

const fetchApi = url => fetch(url).then(response => response.json());

async function getClima(lat, lon){
    const url = `${ UrlBase} lat=${ lat }&lon=${ lon }&appid=${ Apikey }`;
    console.log(url);
    const clima = await fetchApi(url);
    console.log( clima  );
    const temperature = (clima.main.temp - 273.15).toFixed(2)
    document.querySelector('#left h2').innerHTML = clima.name; 
    document.querySelector('#left h3').innerHTML = temperature + '°C';
    pintaFondo(temperature);
}

async function getClimaByCity(city){
    const url = `${ UrlBase}q=${ city }&appid=${ Apikey }`;
    const clima = await fetchApi(url);
    console.log(clima);
    const temperature = (clima.main.temp - 273.15).toFixed(2);
    document.querySelector("#left h2").innerHTML = clima.name;
    document.querySelector("#left h3").innerHTML = temperature + "°C";
    pintaFondo(temperature);
}

navigator.geolocation.getCurrentPosition(
    position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getClima(lat, lon);
    }
);

function pintaFondo(temperature){
    const body = document.querySelector('body');

    if(temperature < 10 ){
        body.style.background = '#00ffff';
    } else if (temperature < 20 ){
        body.style.background = '#C6CE00';
    } else if (temperature < 30 ){
        body.style.background = '#ffff00';
    } else {
        body.style.background = '#ff0000';

    }
    
 }



btnBuscar.addEventListener('click', () => {
    const city = inputCity.value;
    if(city){
        getClimaByCity(city);
    }
});