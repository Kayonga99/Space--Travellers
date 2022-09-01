// import MissionProfile from './MissionProfile';
import { render } from '@testing-library/react';
import RocketProfile from './RocketProfile';

const MyProfile = () => render(
  <div className="profile-flex">
    <RocketProfile />
    {' '}

  </div>,
);
export default MyProfile;
