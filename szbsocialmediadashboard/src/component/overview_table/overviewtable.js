import OverviewCard from '../overviewcard/overviewcard';
import './overviewtable.css';
import '../../component/common_style.css';
import data from '../../sample-data';
import { v4 as uuidv4 } from "uuid";

const OverviewTable = () => {
	let overviewlist = [];
	overviewlist = data.events.map((event) => (<OverviewCard key={uuidv4} {...event} />));
	return (		
		<div className="overview-card-wrapper">			 
			{overviewlist}			
		</div>
	)
}

export default OverviewTable;

