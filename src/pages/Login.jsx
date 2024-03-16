import React from 'react';
import { AuthContext } from '../component/context';

export const Login = () => {
  const { setIsAuth } = React.useContext(AuthContext);
  const [user, setUser] = React.useState({ login: '', password: '' });
  const Login = (e) => {
    e.preventDefault();
    setUser({ login: '', password: '' });
    setIsAuth(true);
    console.log(user);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div className="page-login">
      <h1>Please make a registration for the use of the site</h1>
      <form className="login-form">
        <div className="login-form-block">
          <div className="form-block-login">
            <label for="login">Email adress</label>
            <input
              id="login"
              type="email"
              value={user.login}
              onChange={(e) => setUser({ ...user, login: e.target.value })}
            />
          </div>
          <div className="form-block-password">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button className="btn-login-in" onClick={Login}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};
