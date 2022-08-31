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
  };
  const cancelReseve = (id) => {
    dispatch(cancelResevertion(id));
  };
  return (
    <>
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket">
          <div>
            <img src={rocket.images} alt={rocket.name} />
          </div>
          <h3>{rocket.name}</h3>
          <p>{rocket.description}</p>
          {rocket.reserved ? <button type="button" id={rocket.id} onClick={(e) => cancelReseve(e.target.id)}>cancel</button> : <button type="button" id={rocket.id} onClick={(e) => handleReserve(e.target.id)}>Reserve</button>}
        </div>
      ))}
    </>
  );
};

export default Rockets;
