import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Missions from './missions/index';
import Rockets from './rockets/index';
import Profile from './profile/index';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/rockets" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </div>
);

export default App;
