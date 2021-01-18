class UI {
  constructor (){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this. temperature = document.getElementById('w-temp');
    this.pressure = document.getElementById('w-pressure');
    this.minTemp = document.getElementById('w-temp-min');
    this.maxTemp = document.getElementById('w-temp-max');
    this.humidity = document.getElementById('w-humidity')
  }

  paint(weather){
    // this.location.textContent = weather.name;
    // this.desc.textContent = weather.main;
    // this.string.textContent = weather.weather.description;
    this.temperature.textContent = `Temperature: ${weather.temp}`;
    this.pressure.textContent =`Pressure: ${weather.pressure}`;
    this.minTemp.textContent = `Minimum Temperature: ${weather.temp_min}`;
    this.maxTemp.textContent = `Maximum Temperature: ${weather.temp_max}`;
    this.humidity.textContent = `Humidity: ${ weather.humidity}`;
  }
}