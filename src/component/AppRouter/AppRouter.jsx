import React, { useContext } from 'react';
import st from './AppRouter.module.scss';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { PageDay } from '../../pages/PageDay/PageDay';
import { Login } from '../../pages/Login';
import { AuthContext } from '../context/index';
import { Header } from '../Header/Header';
import { PagePeriod } from '../../pages/PagePeriod';
import ListPeriod from '../ListPeriod';
import { Loader } from '../Loader/Loader';

const AppRouter = () => {
  console.log('page render');
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return Loader();
  }

  return isAuth ? (
    <div className={st.wrapper}>
      <Header />
      <div className={st.block_weather}>
        <ListPeriod />
        <Routes>
          <Route path="/today" element={<PageDay key={'today'} id={0} />} />
          <Route path="/tomorrow" element={<PageDay key={'tomorrow'} id={1} data={1} />} />
          <Route path="/3-days" element={<PagePeriod key={'3-day'} data={3} id={2} />} />
          <Route path="/7-days" element={<PagePeriod key={'7-day'} data={7} id={3} />} />
          <Route path="/*" element={<Navigate to="today" replace />} />
        </Routes>
      </div>
    </div>
  ) : (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Navigate to="login" replace />} />
    </Routes>
  );
};

export default AppRouter;
