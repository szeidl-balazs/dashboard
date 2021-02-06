import './App.css';
import Overview from './components/overview/overview';
import SocialMedia from './components/socialMedia/socialMedia';
import data from './sample-data';
import { v4 as uuidv4 } from "uuid";


function amountFollowers() {
  return [...data.platforms.map((item) => 
    item[Object.keys(item)[0]].followers)].reduce((a, b) => a + b);
}
console.log(amountFollowers);

function App() {
  let overviewList = [];
  overviewList = data.events.map((event) => (<Overview key={uuidv4} {...event} />));
    
  return (
    <div className="App">
      <div className="header">
        <h1>Social Media Dashboard</h1>
        <p id="totalFollowers">Total followers: {amountFollowers()}</p>
        <div></div>
      </div>
      
      <div className="socialMedia">
        <SocialMedia platform={ data.platforms[0].facebook } brand = "facebook"/>
        <SocialMedia platform={ data.platforms[1].twitter } brand = "twitter"/>
        <SocialMedia platform={ data.platforms[2].instagram } brand = "instagram"/>
        <SocialMedia platform={ data.platforms[3].youtube} brand = "youtube"/>
      </div>
      <h1>Overview - Today</h1>
      <div className="overviewContainer">
        {overviewList}
      </div>
    </div>
  ); 
}

export default App;
