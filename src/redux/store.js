import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';

const reducer = combineReducers({
  rockets: rocketReducer,
});
const store = configureStore({ reducer });

export default store;
