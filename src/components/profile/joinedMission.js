import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayJoinedMissionsAction } from '../../redux/missions/missionsSlice';

const JoinedMission = () => {
  const missionJoined = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayJoinedMissionsAction());
  }, []);

  console.log('JoinedMission');
  console.log([] || missionJoined.filter((mission) => mission.joined));
  return (
    <div>joinedMission</div>
  );
};

export default JoinedMission;
