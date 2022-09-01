import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './mission';
import './missions.css';

import { getMissionsAction, switchMissionAction } from '../../redux/missions/missionsSlice';

const Missions = () => {
  const missionState = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsAction());
  }, []);

  const handleClick = (e) => {
    dispatch(switchMissionAction(e));
  };

  return (
    <Table id="table" striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>

        {missionState.map((mission) => (
          <Mission
            handleClick={handleClick}
            key={mission.missionId}
            mission={mission}
          />
        )) || []}
      </tbody>

    </Table>
  );
};

export default Missions;
