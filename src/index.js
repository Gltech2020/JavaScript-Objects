let weather = {
  temperature: 15,
  humidity: 70,
  windSpeed: 25,
};
console.log(weather);
console.log(weather.temperature);
console.log(weather.humidity);
console.log(weather.windSpeed);
let weatherProperties = [
  {
    temperature: 15,
    humidity: 70,
    windSpeed: 25,
  },
];
console.log(weatherProperties[0].temperature);
console.log(weatherProperties[0].humidity);
console.log(weatherProperties[0].windSpeed);
let forecast = [
  { day: "Monday", temperature: 28 },
  { day: "Tuesday", temperature: 25 },
  { day: "Wednesday", temperature: 23 },
  { day: "Thursday", temperature: 21 },
  { day: "Friday", temperature: 18 },
  { day: "Saturday", temperature: 15 },
  { day: "Sunday", temperature: 22 },
];
console.log("The weather forecast for the next week is:");
console.log(forecast[0].day, forecast[0].temperature);
console.log(forecast[1].day, forecast[1].temperature);
console.log(forecast[2].day, forecast[2].temperature);
console.log(forecast[3].day, forecast[3].temperature);
console.log(forecast[4].day, forecast[4].temperature);
console.log(forecast[5].day, forecast[5].temperature);
console.log(forecast[6].day, forecast[6].temperature);
console.log("The temp for Monday is", forecast[0].temperature, "degrees");
