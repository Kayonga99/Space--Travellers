import React from 'react';
import PropTypes from 'prop-types';

const MissionCard = (props) => {
  const { mission, handleClick } = props;
  const {
    missionId, missionName, description, joined,
  } = mission;

  const status = joined ? 'Active Member' : 'NOT A MEMBER';
  const statusBtn = joined ? 'Leave Mission' : 'Join Mission';
  const statusBtnClass = joined ? 'leaveBtn' : 'joinBtn';

  return (
    <tr>
      <td>{missionName}</td>
      <td>{description}</td>
      <td className="statusContainer text-center align-middle">
        <span className={`${joined ? 'bg-info' : 'bg-secondary'} status`}>{status}</span>
      </td>
      <td className="btnJoin text-center align-middle">
        <button
          type="button"
          className={statusBtnClass}
          onClick={() => handleClick(missionId)}
        >
          {statusBtn}
        </button>
      </td>
    </tr>
  );
};

export default MissionCard;

MissionCard.propTypes = {
  mission: PropTypes.func.isRequired,
  handleClick: PropTypes.func,
};

MissionCard.defaultProps = {
  handleClick: () => { },
};
