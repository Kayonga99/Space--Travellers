import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, reserve, cancelResevertion } from '../../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch]);
  const handleReserve = (id) => {
    dispatch(reserve(id));
  }
  return (
    <>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <img src={rocket.images} alt={rocket.name} />
          <h3>{rocket.name}</h3>
          <p>{rocket.description}</p>
          {rocket.reserved ? <button>Reserve</button> : <button>cancel</button>}
        </div>
      ))}
    </>
  );
};

export default Rockets;
