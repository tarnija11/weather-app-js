//weather app

const weatherButton = document.querySelector(".weather_btn");


const apiKey = "71dd4f36289805b3c332c24510a01d70";

weatherButton.addEventListener("click",()=>{
    const cityName = document.querySelector(".inputCity").value;
    fetchData(cityName);
});

//fucntion call
// const fetchedLocation = fetchData()


async function fetchData(cityName){

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
    
    const data = await response.json();

    const card = document.querySelector(".card");
    card.setAttribute.display = "flex";

    document.querySelector(".cityName").textContent=data.name;
    document.querySelector(".temperature").textContent= (data.main.temp) + " ºC";
    document.querySelector(".humidity").textContent=(data.main.humidity + " %");
    document.querySelector(".desc").textContent=data.weather[0].description;
    document.querySelector(".icon").textContent = getIcon(data.weather[0].id);
    console.log(data);

    //generating random gradients
    card.setAttribute("style",`background-image: linear-gradient(${getRandomColor()},${getRandomColor()},${getRandomColor()})`);

}


function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}

function getIcon(weatherID){
    switch(true){
        case (weatherID >=200 && weatherID <= 300):
            return "⛈️";
        case (weatherID >=300 && weatherID < 400):
            return "🌧️";
        case(weatherID >= 400 && weatherID < 500):
            return "🌦️";
        case (weatherID >= 500 && weatherID < 600):
            return "☔";
        case(weatherID >= 600 && weatherID < 700):
            return "🌨️";
        case(weatherID >= 700 && weatherID < 800):
            return "😊";
        case (weatherID >= 800):
            return "🌞";
        default:
            return "some issue occured";
        
    }
}
