import './overviewcard.css';
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

function bigNumber(num) {
	if (num > 999) {
		return parseInt(Math.round(num/1000)) + 'k';
	} else {
		return num
	}

}

const OverviewCard = (props) => {
	return (
		<div className="overview-card">
			<div className="section-bottom-top">
				<p className="event-type">{props.type}</p>
				<img className="icon" src={icons[props.platform]} alt="brand" /> {/*a data objectből a props.platform értékének megfelelő icon array elemet használja*/}
			</div>
			<div className="section-bottom-down">
				<h3>{bigNumber(props.amount)}</h3>
					<div className="table-title-wrapper">
						<img className="icon arrow" src={arrow(props.modifier)} alt="arrow"/>
						<p className="difference" style={textColor(props.modifier)}>{props.modifier}</p>
					</div>
			</div>
		</div>
	)
}

export default OverviewCard;