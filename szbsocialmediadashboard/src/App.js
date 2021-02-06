import React from 'react';
import './App.css';
import './component/common_style.css';
import ToggleSwitch from './component/toggle_switch/toggle_switch';
import OverviewTable from './component/overview_table/overviewtable';
import DashboardTable from './component/dashboardtable/dashboardtable';
import data from './sample-data';

function totalFollowers() {
  return [...data.platforms.map((item) => item[Object.keys(item)[0]].followers)].reduce((a, b) => a + b);
}

function bigNumber(num) {
  return new Number(num).toLocaleString('fi-FI');
}

function App() { 
  

  return (
    <div className="main-div">      
      
      <div className="App">

        <header className="header1">
          
          <div className="title-line">
            <h3>Social Media Dashboard</h3>
              <div className="mode-button">
                <h6>Dark mode</h6>                
                <ToggleSwitch />               
              </div>
          </div>

          <h6 className='total-follow'>Total Followers: {bigNumber(totalFollowers())}</h6>

        </header>

        <DashboardTable />
      
        <header className="header2">
          <h4>Overview - Today</h4>
        </header>        
        <OverviewTable />        
      </div>    
    </div>
  );
}

export default App;
