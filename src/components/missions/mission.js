import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const { mission } = props;
  const { missionName, description, joined } = mission;

  const status = joined ? 'Active Member' : 'NOT A MEMBER';

  return (
    <tr>
      <td>{missionName}</td>
      <td>{description}</td>
      <td>{status}</td>
      <td>joined</td>
    </tr>
  );
};

export default Mission;

Mission.propTypes = {
  mission: PropTypes.func.isRequired,
};
