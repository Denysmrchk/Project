import React from 'react';
import st from './WeatherList.module.scss';
import { RandomImage, RandomTemperature, arrImgWheater } from '../RandomValue';

const temperature = RandomTemperature();
export const WeatherList = ({ ...props }) => {
  const [weatherList, setWeatherList] = React.useState([]);
  const arrWeatherNow = () => {
    if (props.obj.clock) {
      return props.obj.weatherList
        .filter((item) => new Date().getHours() < item.time)
        .map((obj) => ({
          ...obj,
          src: arrImgWheater[obj.icon].src,
          humidity: obj.humidity,
        }));
    } else;
    {
      return props.obj.weatherList.map((obj) => ({
        ...obj,
        src: arrImgWheater[obj.icon].src,
        humidity: obj.humidity,
      }));
    }
  };
  React.useEffect(() => {
    setWeatherList(arrWeatherNow());
  }, []);
  return (
    <div className={st.weather_upcoming}>
      <ul className={st.upcoming_list}>
        {weatherList.map((obj) => (
          <li key={obj.name}>
            <div className={st.title_time}>{obj.name}</div>
            <img src={obj.src} className={st.icon} />
            <div className={st.temperature}>{obj.temperature}°C</div>
            <div className={st.humidity}>{obj.humidity}%</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
