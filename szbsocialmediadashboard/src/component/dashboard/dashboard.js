import './dashboard.css';




const Dashboard = (props) => {

		return (
			<div className="dashboard-wrapper">
				<div className="status-bar"></div>
				<div className="table">
					<div className="table-title-wrapper">
						<img className="icon" src={props.brand} alt="brand"/>
						<p className="email">@{props.name}</p>
					</div>
					<h1 className="dashboard-data">{props.followers}</h1>
					<p>FOLLOWERS</p>
					<div className="table-title-wrapper">
						<img className="icon" src={props.arrow} alt="arrow"/>
						<p className="difference">{props.difference} Today</p>
					</div>
				</div>
			</div>
		);

}

export default Dashboard;