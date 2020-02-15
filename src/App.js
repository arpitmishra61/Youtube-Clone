import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import MainScreen from './components/MainScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="screen">
        <SideBar />
        <MainScreen />
      </div>
      
    </div>
  );
}

export default App;
