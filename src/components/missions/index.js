import React from 'react';

const missions = () => {
  console.log('Wait');

  const BASE_URL = 'https://api.spacexdata.com/v3/missions';

  // const getMissions = async (url) => {
  //   let data = await fetch(url);
  //   data = await data.json();
  //   const missionArray = [];
  //   data.map((item) => missionArray.push({
  //     mission_id: item.mission_id,
  //     mission_name: item.mission_name,
  //     description: item.description,
  //   }));
  //   return missionArray;
  // };

  const fetchMission = async (url) => {
    let data = await fetch(url);
    data = await data.json();
    const missionArray = [];
    data.map((item) => missionArray.push({
      mission_id: item.mission_id,
      mission_name: item.mission_name,
      description: item.description,
    }));
    return missionArray || [];
  };

  const getMissionById = async (url, id) => {
    const missionList = await fetchMission(url);
    const mission = missionList.find((mission) => mission.mission_id === id);
    return mission;
  };

  console.log(getMissionById(BASE_URL, 'F4F83DE'));

  return (
    <div>missions</div>
  );
};

export default missions;
