//Feature #1
//Display the current date and time using JavaScript: Tuesday 16:00

function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let daysOfWeek = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[daysOfWeek];
    let sky = "Clear sky";
  
    return `${day} ${hours}:${minutes}, ${sky}`;
  }
  
  let dateElement = document.querySelector("#time-now");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  /*function searchCity(event) { 
    event.preventDefault();
  }*/
  //let currentLocation = document.querySelector("#location-button");
  //currentLocation.addEventListener("click", showGeoLocation);
  //searchForm.addEventListener("submit", searchCity);
  function changeTemperature(response) {
    document.querySelector("#my-city").innerHTML = response.data.name;
    document.querySelector("#now-temperature").innerHTML = Math.round(
      response.data.main.temp
    );
  }
  
  function showWeatherByCity(cityElement) {
    let apiKey = "a5acb752426cd8188485c35694980e3av";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityElement}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(changeTemperature);
  }
  
  function showLocation(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#input-search").value;
    showWeatherByCity(cityElement);
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", showLocation);
  showWeatherByCity("Liverpul");
  
  function newTemperature(position) {
    let apiKey = "02c067fbe0a95f847d98a3fc4fe7414d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(changeTemperature);
  }
  
  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(newTemperature);
  }
  
  let currentLocation = document.querySelector("#location-button");
  currentLocation.addEventListener("click", getCurrentPosition);
  