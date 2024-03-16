import React from 'react';
import style from './PageDay.module.scss';
import { WeatherCart } from '../../component/WeatherCart/WeatherCart';
import { WeatherList } from '../../component/WeatherList/WeatherList';
import ValueService from '../../API/ValueService';
import { useFetching } from '../../component/useFetching';
import { Loader } from '../../component/Loader/Loader';

export const PageDay = ({ ...props }) => {
  const [post, setPost] = React.useState({});
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await ValueService.getById(props.id + 1);
    setPost(response.data);
  });

  React.useEffect(() => {
    fetchPostById();
  }, []);
  if (!Object.keys(post).length && !isLoading) {
    return Loader(); // или какой-то другой рендер, например, заглушка
  }
  return (
    <div className={style.wrapper}>
      {isLoading ? (
        Loader()
      ) : (
        <>
          <WeatherCart obj={post} />
          <WeatherList obj={post} />
        </>
      )}
    </div>
  );
};
