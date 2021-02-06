import './dashboard.css';
import '../../component/common_style.css';
import facebook from '../image/facebook.png';
import twitter from '../image/twitter.png';
import instagram from '../image/instagram.png';
import youtube from '../image/youtube.png';
import uparrowgreen from '../image/uparrowgreen.png';
import downarrowred from '../image/downarrowred.png';

let icons = {facebook: facebook, twitter: twitter, instagram: instagram, youtube: youtube};

function arrow(diff) {
	if (diff > 0) {
		return uparrowgreen;
	} else {
		return downarrowred;
	}
}

function textColor(diff) {
	if (diff > 0) {
		return ({color: `#009276`})
	} else {
		return ( {color: `#C12D47`})
	}
}

function statusBarColor(diff) {
	let dropColor = '#C12D47';
	let growthColor ='#039DED';
	let boostColor = 'orange';
	
	if (diff > 1000) {
		return ({backgroundColor: boostColor})
	}	else if (diff > 0) {
		return ({backgroundColor: growthColor})
	} else {
		return ({backgroundColor: dropColor})
	}
}

function bigNumber(num) {

	if (num > 9999) {
		return parseInt(Math.round(num/1000)) + 'k'
	} else {
			return num
		}
} 

const Dashboard = (props) => {

		return (
			<div className="dashboard-wrapper">
				<div className="status-bar" style={statusBarColor(props.difference)}></div>
				<div className="table">
					<div className="table-title-wrapper">
						<img className="icon" src={icons[props.brand]} alt="brand"/>
						<p className="email">@{props.name}</p>
					</div>
					<h1 className="dashboard-data">{bigNumber(props.followers)}</h1>
					<p>FOLLOWERS</p>
					<div className="table-title-wrapper">
						<img className="icon arrow" src={arrow(props.difference)} alt="arrow"/>
						<p className="difference-positive" style={textColor(props.difference)}>{props.difference} Today</p>
					</div>
				</div>
			</div>
		);

}

export default Dashboard;