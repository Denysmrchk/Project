import React from 'react';
import { WeatherCart } from '../component/WeatherCart/WeatherCart';
import { useFetching } from '../component/useFetching';
import ValueService from '../API/ValueService';
import { Loader } from '../component/Loader/Loader';

export const PagePeriod = ({ ...props }) => {
  const [post, setPost] = React.useState({});
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await ValueService.getById(props.id + 1);
    setPost(response.data);
  });

  const ListItem = (obj) => {
    let arrItem = [];
    for (let i = 0; i < obj.days; i++) {
      arrItem.push({ id: i + 1, icon: obj.icon[i], temperature: obj.temperature[i] });
    }
    return arrItem;
  };
  React.useEffect(() => {
    fetchPostById();
  }, []);
  if (!Object.keys(post).length && !isLoading) {
    return Loader();
  }
  return (
    <div className="list_weather">
      {ListItem(post).map((obj) => {
        return (
          <div className="list_item">
            <WeatherCart obj={obj} lenght={post.days} />
          </div>
        );
      })}
    </div>
  );
};
