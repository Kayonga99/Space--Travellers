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
      <div className={Css.DivSep}>
        <h3 className={Css.h3}>Reserved Rockets</h3>
        {rockets.map((rocket) => (
          <div className={Css.profileDiv} key={rocket.id}>
            <lin className={Css.liRocket}>{rocket.name}</lin>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
