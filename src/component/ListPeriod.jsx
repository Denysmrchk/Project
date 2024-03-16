import React from 'react';
import st from './AppRouter/AppRouter.module.scss';
import { Link } from 'react-router-dom';
const ListPeriod = () => {
  const arrPage = ['today', 'tomorrow', '3-days', '7-days'];
  const [activePeriod, setActivePeriod] = React.useState('today');

  return (
    <ul className={st.list_period}>
      {arrPage.map((obj) => {
        return (
          <Link key={obj} className={st.b} to={`/${obj}`}>
            <li
              className={activePeriod === obj ? st.active : st.a}
              onClick={() => setActivePeriod(obj)}
              key={obj}>
              {obj}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default ListPeriod;
