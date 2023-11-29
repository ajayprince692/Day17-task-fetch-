fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((countries) => {
    for (let i = 0; i < countries.length; i++) {
      let country = countries[i];

      let card = document.createElement("div");
      card.innerHTML = `
        <div class="card1">
          <div class="row col-lg-4 -col-sm-12 ">
            <div class="col">
              <div class="card">
                <div class="card-header">${country.name.common}</div>
                <img src="${country.flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Capital: ${country.capital}</h5>
                  <h5 class="card-title">Region: ${country.region}</h5>
                  <h5 class="card-title">Country Code: ${country.cca3}</h5>
                  <h5 class="card-title">Latlng: ${country.latlng}</h5>
                  <button class="btn btn-primary weather-button" data-country="${country.name.common}">Click for weather</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;

      document.getElementById("cardsContainer").appendChild(card);

      // Add event listener for each weather button
      let weatherButton = card.querySelector(".weather-button");
      weatherButton.addEventListener("click", () => {
        updateWeather(country.name.common);
      });
    }
  });

function updateWeather(restcountry) {
  let apiKey = "a48bc57de61b3da9eb170f8463f08cd7";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${restcountry}&appid=${apiKey}`;

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((weatherData) => {
      let countryWeather = {
        name: weatherData.name,
        temperature: weatherData.main.temp,
      };
      alert(
        `Weather in ${countryWeather.name}: ${countryWeather.temperature}°C`
      );
    })
    .catch((error) => console.log(error));
}
