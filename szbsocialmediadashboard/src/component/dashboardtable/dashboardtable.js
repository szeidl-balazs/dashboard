import './dashboardtable.css';
import '../../component/common_style.css';
import Dashboard from '../dashboard/dashboard';
import data from '../../sample-data';

const DashboardTable = () => {

	return (
		<section className="section-top">
			<Dashboard
				brand='facebook'
				name={data.platforms[0].facebook.name} 
				followers={data.platforms[0].facebook.followers}
				difference={data.platforms[0].facebook.difference}  
			/>          
			
			<Dashboard
				brand='twitter'
				name={data.platforms[1].twitter.name} 
				followers={data.platforms[1].twitter.followers}
				difference={data.platforms[1].twitter.difference}  
			/>
			
			<Dashboard 
				brand='instagram'
				name={data.platforms[2].instagram.name} 
				followers={data.platforms[2].instagram.followers}
				difference={data.platforms[2].instagram.difference}          
			/>
			
			<Dashboard
				brand='youtube'
				name={data.platforms[3].youtube.name} 
				followers={data.platforms[3].youtube.followers}
				difference={data.platforms[3].youtube.difference}
			/>
		</section>
	)
}

export default DashboardTable;