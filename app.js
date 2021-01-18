//Instantiate the UI
const ui = new UI();

//Instantiate storage
const store = new Store();

//get location data
const weatherLocation = store.getLocation();

//Instantiate weather
const weather = new Weather(weatherLocation.city);


//Get results on the DOM
document.addEventListener('DOMContentLoaded', getWeatherResults)

//add location event listener
document.getElementById('w-change-btn').addEventListener('click', () => {

  const city = document.getElementById('city').value;

  //change location
  weather.changeLocation(city);

  //Set location in local storage
  store.setLocation(city)

  //call the getWeather function
  getWeatherResults();

  //close the modal
  $('#locModal').modal('hide');
})

//Change the city
//weather.changeLocation('Kisumu');

//Get the results
function getWeatherResults(){
  weather.getWeather()
  .then(results => {
  ui.paint(results)
  // console.log(results);
  })
  .catch(err => console.log(err))
}