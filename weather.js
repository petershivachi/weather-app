class Weather{
  constructor(city){
    this.apiKey = 'f8a30749adcebbc48de8b48577916b4d';
    this.city = city;
  }

  //get the weather
  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData.main
  }

  //change location
  changeLocation(city){
    this.city = city;
  }
}  