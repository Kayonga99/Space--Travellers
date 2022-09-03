import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Css from './rockets.module.css';
import { displayJoinedMissionsAction } from '../../redux/missions/missionsSlice';

const Profile = () => {
  const state = useSelector((state) => state);
  const missionJoined = state.missions.missions.filter((mission) => mission.joined);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayJoinedMissionsAction());
  }, []);

  /* eslint-disable */ 
  const rockets = state.rockets.rockets.filter(rocket => rocket.reserved);

  return (
    <div className={Css.Profile}>
      {/* My missions */}
      <div className={Css.DivSep}>
        <h3 className={Css.h3}>My Missions</h3>
        {missionJoined.map((mission) => (
          <div className={Css.profileDiv} key={mission.missionId}>
            <div className={Css.liRocket}>{mission.missionName}</div>
          </div>
        ))}
      </div>
      {/* My Rockets */}
      <div className={Css.DivSep}>
        <h3 className={Css.h3}>My Rockets</h3>
        {rockets.map((rocket) => (
          <div className={Css.profileDiv} key={rocket.id}>
            <div className={Css.liRocket}>{rocket.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
