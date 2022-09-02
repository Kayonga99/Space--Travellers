import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const { mission } = props;
  const { missionName, description, joined } = mission;

  const status = joined ? 'Active Member' : 'NOT A MEMBER';
  const statusBtn = joined ? 'Leave Mission' : 'Join Mission';
  const statusBtnClass = joined ? 'leaveBtn' : 'joinBtn';

  return (
    <tr>
      <td>{missionName}</td>
      <td>{description}</td>
      <td className="statusContainer text-center align-middle">
        <span className={`${joined && 'bg-info'} status`}>{status}</span>
      </td>
      <td className="btnJoin text-center align-middle">
        <button className={statusBtnClass} type="button">{statusBtn}</button>
      </td>
    </tr>
  );
};

export default Mission;

Mission.propTypes = {
  mission: PropTypes.func.isRequired,
};
