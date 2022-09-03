import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Css from './rockets.module.css';
import { displayJoinedMissionsAction } from '../../redux/missions/missionsSlice';

const Profile = () => {
  /* Missions */
  const state = useSelector((state) => state);
  const missionJoined = state.missions.missions.filter((mission) => mission.joined);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayJoinedMissionsAction());
  }, []);

  /* eslint-disable */ 
  const rockets = state.rockets.rockets.filter(rocket => rocket.reserved);

  /* eslint-enable */
  return (
    <div className={Css.Profile}>

      <div className={Css.DivSep}>
        <h3 className={Css.h3}>My Missions</h3>
        {missionJoined.map((mission) => (
          <div className={Css.profileDiv} key={mission.missionId}>
            <lin className={Css.liRocket}>{mission.missionName}</lin>
          </div>
        ))}
      </div>
      <div className={Css.DivSep}>
        <h3 className={Css.h3}>My Rockets</h3>
        {rockets.map((rocket) => (
          <div className={Css.profileDiv} key={rocket.id}>
            <lin className={Css.liRocket}>{rocket.name}</lin>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
