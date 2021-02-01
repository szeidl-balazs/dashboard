import React from 'react';
import './App.css';
import ToggleSwitch from './component/toggle_switch/toggle_switch';
import Dashboard from './component/dashboard/dashboard';

function App() {
  return (
    <div className="main-div">      
      
      <div className="App">
        <header className="header1">
          
          <div className="title-line">
            <h3>Social Media Dashboard</h3>
              <div className="mode-button">
                <h6>Mode</h6>                
                <ToggleSwitch />               
              </div>
          </div>
          
          <h6>Total Followers: </h6>
        </header>
        

        <section className="section-top">
          <Dashboard />
        </section>
      
        <header className="header2">
          <h4>Overview - Today</h4>
        </header>

        <section className="section-mid"></section>

        <section className="section-bottom"></section>        
      
      </div>
    
    </div>
  );
}

export default App;
