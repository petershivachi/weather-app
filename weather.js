class Weather{
  constructor(city){
    this.apiKey = '3d7987c531053519cb4b42313fc3b5ec',
    this.city = city
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