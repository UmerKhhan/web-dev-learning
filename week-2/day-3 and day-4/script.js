const WeatherApiKey = "8e56f4467040c79d207648bd0079adbb";
const searchbtn= document.getElementById("search");
const inputCity = document.getElementById("city");
const displayCard = document.querySelector('.webcard') ;
const timeDiv = document.querySelector('.time')
const forecastcard = document.querySelector(".forcastcard .futuretemps")
const todaydata = document.querySelector(".todaydata")

const getForecast = async (city)=>{
    try{
        if(!city){
            document.querySelector('.handle-error').innerHTML = `Enter a City`
            setTimeout(() => {
                document.querySelector('.handle-error').innerHTML = ``
            }, 3000);
            return;
        }
        let responce = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WeatherApiKey}&units=metric`);
        const data = await responce.json();
        if(data.cod === "404" || data.cod === 404){
            document.querySelector('.handle-error').innerHTML = `City name is wrong`
            setTimeout(() => {
                document.querySelector('.handle-error').innerHTML = ``
                
            }, 3000);
            return; 
        }
        console.log(data)
        return data;
    }
    catch(error){
        console.log(error)
    }
}   
 

searchbtn.addEventListener("click", async ()=>{
    let weatherdata = await getForecast(inputCity.value);
    if (!weatherdata){
        return;
    }
    updateDisplayCard(weatherdata);
})

const updateDisplayCard = (data)=>{
        displayCard.innerHTML=`
        <img src="./assets/hero-sec-bg.jpg" alt="" class="hero-sec-bg-img">
        <div class="hero">
            <div class="todaydata">
                <span class="tempmax">Highest Temp: ${Math.round(data.list[0].main.temp_max)}</span>
                <span class="tempmin">Lowest Temp: ${Math.round(data.list[0].main.temp_min)}</span>
                <span class="sunrise">Sunrise: ${getUnixTime(data.city.sunrise)}</span>
                <span class="sunset">Sunset: ${getUnixTime(data.city.sunset)}</span>     
            </div>
            <div class="container">
                <div class="location">
                    <span class="city">${data.city.name }, </span>
                    <span class="country">${data.city.country }</span>
                </div>
                <div class="temps">
                    <h1 class="temp">${Math.round(data.list[0].main.temp)} °C</h1>
                    <h6 class="tempfeelslike">feels like: ${Math.round(data.list[0].main.feels_like )} °C</h6>
                </div>
            </div>
            <div class="description">
                <span class="status">${data.list[0].weather[0].main }</span>
                <span class="humidity">Humidity ${data.list[0].main.humidity }%</span>
                <span class="windspeed">Wind speed ${data.list[0].wind.speed}m/s</span>
            </div>
        </div>
        `
        const nextFiveBlocks = data.list.slice(1, 6);
        const hourlyData = nextFiveBlocks.map((item) => {
    
        const timeString = item.dt_txt.slice(11, 16); 
        
        return {
            time: timeString,
            temp: Math.round(item.main.temp),
            icon: item.weather[0].icon
        };
    });
    forecastcard.innerHTML = "";
    hourlyData.forEach(element => {
        let div = document.createElement("div");
        let titleTime = element.time.slice(0,2);
        let ampm = 'am'
        if(titleTime > 12){
            titleTime = titleTime - 12;
            ampm= 'pm'
        }
        if(titleTime == 0){
            titleTime = 12;
        }
        div.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${element.icon}.png" alt="" id='weathericonimg'>
            <span id="temp">${element.temp} °C</span>
            <span id="time">${titleTime}:00${ampm}</span>
        `;
        forecastcard.appendChild(div);
    });

    

}
        
                    
    
const getUnixTime = (unixtime)=>{
    unixtime = unixtime*1000;

    let dateobj = new Date(unixtime)
    let minutes = dateobj.getMinutes();
    let hours = dateobj.getHours();
    let ampm = 'am';

    minutes = checkForZero(minutes);
    hours = checkForZero(hours);
    if (hours > 12){
        hours = hours - 12
        let ampm = 'pm'
    }


    return `${hours}:${minutes} ${ampm}`;
}

function checkForZero(time){
    if (time < 10){
        time = time.toString().padStart(2,"0");
        return time;
    }
    return time;
}
