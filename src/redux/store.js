// import {
//   createStore, combineReducers, applyMiddleware, compose,
// } from 'redux';
// import logger from 'redux-logger';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';
import missionsReducer from './missions/missionsSlice';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionsReducer,

});
// const store = createStore(reducer, compose(applyMiddleware(thunk, logger)));

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
