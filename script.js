const API_KEY = "b02cb76da9a4464606ab760a50d0a651";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
window.addEventListener('load',() => fetchweather("Mumbai"))
async function fetchweather(query) {
  try {
    const req = `${url}${query}&appid=${API_KEY}&units=metric`;
    const res = await fetch(req);
    const data = await res.json();
    console.log(data);

    bindData(
      data.main.temp,
      data.main.humidity,
      data.weather[0].main,
      data.wind.speed
    );

    cityEl.innerText = data.name;

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const tempEl = document.getElementById("temp");
const searchEL = document.getElementById("search");
const btnEl = document.getElementById("btn");
const cityEl = document.getElementById("city");
const Weatherdis = document.getElementById("Weatherdis");
const Humidity = document.getElementById("Humidity");
const Wind = document.getElementById("Wind");

function bindData(temp, hum, weather, wind) {
  tempEl.innerText = `${temp}°C`;
  Humidity.innerText = `${hum} RH`;
  Weatherdis.innerText = weather;
  Wind.innerText = `${wind} KM`;
}

btnEl.addEventListener("click", () => {
  const query = searchEL.value.trim();
  if (!query) return;
  fetchweather(query);
  searchEL.value = "";
});

function time() {
  const now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  return `${day}, ${month} ${date}`;
}

const timeEl = document.getElementById("time");
timeEl.innerHTML = time();
