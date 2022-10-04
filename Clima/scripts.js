
const API_KEY = "b58b8adf8e84b1d1528d971c73043e42"


const fetchData= position =>{
    const{latitude, longitude} = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
  
    /*https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&lang={lang}  .....
    esto es aparte por sia caso */

    .then( response => response.json())
    .then(data => setWeatherData(data))
};

const setWeatherData = data =>{
    console.log(data);
    const weatherData ={
        locacion: data.name,
        descripcion: data.weather[0].main,
        humedad: data.main.humidity +'⛅' ,
        presion: data.main.pressure,
        temperatura: data.main.temp +'°',
        fecha: getDate()

    }

    Object.keys(weatherData).forEach ( key => {
        document.getElementById(key).textContent =weatherData[key];
    });
  
    
     cleanUp();
}
     const cleanUp =()=>{
        let container = document.getElementById('container');
        let loader = document.getElementById('loader');

        loader.style.display = 'none';
        container.style.display = 'flex';
     
}

const getDate = () => {
    let date = new Date();
    return `${( '0' + (date.getDate() +1 )).slice(-2)}-${( '0' + (date.getMonth() +1 )).slice(-2)}-${date.getFullYear()}`;
}

const onLoad = ( ) => {

    navigator.geolocation.getCurrentPosition(fetchData);
}
