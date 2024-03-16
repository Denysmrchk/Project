import React from 'react';

const GetTime = () => {
  const [clock, setClock] = React.useState(new Date());

  React.useEffect(() => {
    const timerId = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);
  return <div>{clock.toLocaleTimeString()}</div>;
};

export default GetTime;
