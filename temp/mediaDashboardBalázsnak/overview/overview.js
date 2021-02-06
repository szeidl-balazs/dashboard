import './overview.css';
import face from '../icons/facebook.svg';
import twitt from '../icons/twitter.svg';
import inst from '../icons/instagram.png';
import yout from '../icons/youtube.svg';


let icons = {facebook: face, twitter: twitt, instagram: inst, youtube: yout};

function amount(num) {
  if (num > 9999) {
    return parseInt(Math.round(num/1000)) + "k"
  }else {
    return num;
  }
}

function difference(diff) {
  if (diff > 0) {
    return(
      `▲ ${diff} %`
    );
  }else if (diff < 0) {
    return(
      `▼ ${-diff} %`
    ); 
  }
}

function textColor(diff) {
  if (diff > 0) {
    return(
      {color: `green`}
    );
  }else if (diff < 0) {
    return(
      {color: `red`}
    ); 
  }
}

function Overview(props) {
  return(
    <div className="overview">
      <div className="overviewCards">
        <div className="overviewElements">
          <p>{props.type}</p>
          <div className="icons">
            <img className="logos" alt="" src={icons[props.platform]} /> /*a data objectből a props.platform értékének megfelelő icon array elemet használja*/
          </div>
          <p>{amount(props.amount)}</p>
          <p className="modifier" style = {textColor(props.modifier)}> {difference(props.modifier)} </p>
        </div>
      </div>
    </div>
  );
  
}

export default Overview;