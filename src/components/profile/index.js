import React from 'react';
import { useSelector } from 'react-redux';
import Css from './rockets.module.css';

function Profile() {
  /* eslint-disable */ 
  const rockets = useSelector((state) => state.rockets.rockets.filter(rocket => rocket.reserved));
  console.log(rockets);
  /* eslint-enable */
  return (
    <div className={Css.Profile}>
      <h3>Reserved Rockets</h3>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <h3>{rocket.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Profile;
