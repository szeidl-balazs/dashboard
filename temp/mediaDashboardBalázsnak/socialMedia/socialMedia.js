import './socialMedia.css';
import face from '../icons/facebook.svg';
import twitt from '../icons/twitter.svg';
import inst from '../icons/instagram.png';
import yout from '../icons/youtube.svg';


let icons = {facebook: face, twitter: twitt, instagram: inst, youtube: yout};

function followers(num) {
  if (num > 9999) {
    return parseInt(Math.round(num/1000)) + "k"
  }else {
    return num;
  }
}

function difference(diff) {
  if (diff > 0) {
    return(
      `▲ ${diff} Today`
    );
  }else if (diff < 0) {
    return(
      `▼ ${-diff} Today`
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

function SocialMedia(props) {
  console.log(typeof props.platform.difference)
  return(
    <div className="socialMediaCards">
      <div className="icons">
        <img className="logo" alt="" src={icons[props.brand]} />
        {props.platform.name}
      </div>
      <p>{followers(props.platform.followers)} <span>FOLLOWERS</span></p>
      <p className="difference" style = {textColor(props.platform.difference)}> {difference(props.platform.difference)} </p>
    </div>
  );

}

export default SocialMedia;