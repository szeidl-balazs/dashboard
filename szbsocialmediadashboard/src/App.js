import React from 'react';
import './App.css';
import ToggleSwitch from './component/toggle_switch/toggle_switch';
import Dashboard from './component/dashboard/dashboard';
import data from './sample-data';
import facebook from './component/image/facebook.png';
import twitter from './component/image/twitter.png';
import instagram from './component/image/instagram.png';
import youtube from './component/image/youtube.png';
import uparrow from './component/image/uparrow.png';
import downarrow from './component/image/downarrow.png';

function App() {


  return (
    <div className="main-div">      
      
      <div className="App">
        <header className="header1">
          
          <div className="title-line">
            <h3>Social Media Dashboard</h3>
              <div className="mode-button">
                <h6>Night mode</h6>                
                <ToggleSwitch />               
              </div>
          </div>
          
          <h6>Total Followers: </h6>
        </header>
        

        <section className="section-top">
          <Dashboard
            brand={facebook}
            name={data.platforms[0].facebook.name} 
            followers={data.platforms[0].facebook.followers}
            arrow={data.platforms[0].facebook.difference > 0 ? uparrow : downarrow}
            difference={data.platforms[0].facebook.difference}            
          />
          <Dashboard
            brand={twitter}
            name={data.platforms[1].twitter.name} 
            followers={data.platforms[1].twitter.followers}
            arrow={data.platforms[1].twitter.difference > 0 ?  uparrow : downarrow}
            difference={data.platforms[1].twitter.difference}  
          />
          <Dashboard 
            brand={instagram}
            name={data.platforms[2].instagram.name} 
            followers={data.platforms[2].instagram.followers}
            arrow={data.platforms[2].instagram.difference > 0 ?  uparrow : downarrow}
            difference={data.platforms[2].instagram.difference}          
          />
          <Dashboard
            brand={youtube}
            name={data.platforms[3].youtube.name} 
            followers={data.platforms[3].youtube.followers}
            arrow={data.platforms[3].youtube.difference > 0 ?  uparrow : downarrow}
            difference={data.platforms[3].youtube.difference}          
          />
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
