// Wealther API Code
const apiKey = "8afa104a026f9db3c7d4b8c08fe8b5d9";
const city = "Afikpo";
const units = "metric";

// Current Weather
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("current-temp").textContent = data.main.temp.toFixed(1);
    document.getElementById("weather-description").textContent = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const iconImg = document.getElementById("weather-icon");
    iconImg.src = iconUrl;
    iconImg.alt = data.weather[0].description;
  })
  .catch((error) => {
    console.error("Weather API Error:", error);
  });

// 3-Day Forecast
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`)
  .then((response) => response.json())
  .then((data) => {
    const forecastList = document.getElementById("forecast-list");
    forecastList.innerHTML = "";

    const dailyData = {};
    data.list.forEach((entry) => {
      const date = entry.dt_txt.split(" ")[0];
      if (!dailyData[date]) {
        dailyData[date] = [];
      }
      dailyData[date].push(entry.main.temp);
    });

    const days = Object.keys(dailyData).slice(1, 4); // next 3 days
    days.forEach((date) => {
      const temps = dailyData[date];
      const avgTemp = temps.reduce((sum, temp) => sum + temp, 0) / temps.length;
      const listItem = document.createElement("li");
      listItem.textContent = `${date}: ${avgTemp.toFixed(1)} °C`;
      forecastList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Forecast API Error:", error);
  });


  