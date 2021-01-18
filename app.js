const weather = new Weather('Nairobi');

//Get results on the DOM
document.addEventListener('DOMContentLoaded', getWeatherResults)

//Change the city
//weather.changeLocation('Kisumu');

//Get the results
function getWeatherResults(){
  weather.getWeather()
  .then(results => {
  console.log(results)
  })
  .then(err => console.log(err))
}
