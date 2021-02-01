import './dashboard.css';
import data from './sample-data.js';
import facebook from './facebook.png';

const Dashboard = () => {

		return (
			<div className="dashboard-wrapper">
				<div className="status-bar"></div>
				<div className="table">
					<div className="table-title-wrapper">
						<img className="icon" src={facebook} alt="facebook"/>
						<p className="email">@nathanf</p>
					</div>
					<h1 className="dashboard-data">1987</h1>
					<p>FOLLOWERS</p>
					<p className="difference">12 Today</p>
				</div>
			</div>

		)

}

export default Dashboard;