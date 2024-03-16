import React from 'react';
import style from './WeatherCart.module.scss';
import GetTime from '../getTime';
import GetDate from '../getDate';
import { arrImgWheater } from '../RandomValue';
export const WeatherCart = ({ ...props }) => {
  if (props.obj.icon) {
    return (
      <div className={style.cart_weather}>
        <div className={style.date}>
          {props.lenght > 3 ? null : <span>Date:</span>}
          {GetDate(props.obj.id - 1)}
        </div>
        <div className={style.div_img}>
          <img src={arrImgWheater[props.obj.icon].src} className={style.icon_weather} />
          <div className={style.temperature}>
            <span>
              {props.obj.temperature}
              °C
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={style.cart_weather}>
      <div className={style.date}>
        {props.obj.day > 3 ? null : <span>Date:</span>}
        {GetDate(props.obj.id - 1)}
      </div>
      <div className={style.div_img}>
        <img
          src={arrImgWheater[props.obj.weatherList[2].icon].src}
          className={style.icon_weather}
        />
        <div className={style.temperature}>
          {props.obj.clock ? (
            <>
              <span>
                {
                  props.obj.weatherList.filter((item) => new Date().getHours() < item.time)[0]
                    .temperature
                }
                °C
              </span>
              <GetTime />
            </>
          ) : (
            <span>
              {props.obj.weatherList
                .map((obj) => obj.temperature)
                .reduce((acum, curr) => acum + curr) / props.obj.weatherList.length}
              °C
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
