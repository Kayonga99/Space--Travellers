import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './mission';

import { getMissionsAction } from '../../redux/missions/missionsSlice';

const Missions = () => {
  const missionState = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsAction());
  }, []);

  return (
    <table>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
      {missionState.map((mission) => (
        <Mission
          key={mission.missionId}
          mission={mission}
        />
      )) || []}
    </table>
  );
};

export default Missions;
