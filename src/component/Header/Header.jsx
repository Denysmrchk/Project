import React from 'react';
import SearchInput from '../searchInput/searchInput';
import st from './Header.module.scss';
import { AuthContext } from '../context';
export const Header = () => {
  const { setIsAuth } = React.useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);

    localStorage.removeItem('auth');
  };
  return (
    <div>
      <div className={st.user_menu}>
        <p>icon</p>
        <p onClick={logout}>log out</p>
      </div>
      <div className={st.header}>
        <h1>Weather Widget</h1>
        <SearchInput />
      </div>
    </div>
  );
};
