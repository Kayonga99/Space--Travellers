import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch]);
  return (
    <>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <img src={rocket.images} alt={rocket.name} />
          <h3>{rocket.name}</h3>
          <p>{rocket.description}</p>
        </div>
      ))}
    </>
  );
};

export default Rockets;
