      let weatherDiv = document.getElementById("weather");
      const apiKey = "0fc0488a3404449184f204619250212";
      const city = "Chennai";
      const url = `https://api.weatherapi.com/v1/forecast.json?key=bc37b7b1585849a0849210718250212&q=Chennai&days=1&aqi=no&alerts=no
        `;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const cityName = data.location.name;
          const condition = data.current.condition.text;
          const tempc = data.current.temp_c;
          const tempf = data.current.temp_f;
          const icon = data.current.condition.icon;

          weatherDiv.innerHTML = `
                <h2>Weather in ${city}</h2>
                <img src="https:${icon}" alt="${condition}" id="weatherPic">
                <p id="temp">${tempc}°C || ${tempf}°F</p><br>
                <p id="condition">${condition}</p>
            `;
        })
        .catch((error) => {
          document.getElementById("weather").innerText =
            "Failed to load weather.";
          console.error(error);
        });
