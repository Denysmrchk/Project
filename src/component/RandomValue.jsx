export const RandomTemperature = () => {
  return Math.floor(Math.random() * (34 - -10 + 1)) + -10;
};
export const RandomImage = () => {
  const arrImgWheater = [
    { name: 'cloud', src: 'img/weather-picture/cloud.jpg' },
    { name: 'moony', src: 'img/weather-picture/moony.jpg' },
    { name: 'rain', src: 'img/weather-picture/rain.jpg' },
    { name: 'sunny-cloud', src: 'img/weather-picture/sunny-cloud.jpg' },
    { name: 'sunny', src: 'img/weather-picture/sunny.jpg' },
  ];
  return arrImgWheater[Math.floor(Math.random() * arrImgWheater.length)].src;
};
export function addNumberToData(days) {
  var currentDate = new Date(); // Получаем текущую дату
  var newDate = new Date(currentDate); // Создаем новую дату, чтобы избежать изменения текущей
  return newDate.setDate(currentDate.getDate() + (days > 0 ? days : null));
}
export const arrImgWheater = [
  { name: 'cloud', src: 'img/weather-picture/cloud.jpg' },
  { name: 'moony', src: 'img/weather-picture/moony.jpg' },
  { name: 'rain', src: 'img/weather-picture/rain.jpg' },
  { name: 'sunny-cloud', src: 'img/weather-picture/sunny-cloud.jpg' },
  { name: 'sunny', src: 'img/weather-picture/sunny.jpg' },
];
