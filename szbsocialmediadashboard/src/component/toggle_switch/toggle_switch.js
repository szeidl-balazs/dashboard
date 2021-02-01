import './toggle_switch.css';

function ToggleSwitch() {

	return (
		<label className="switch">
			<input type="checkbox" checked />
			<span className="slider round"></span>
		</label>
	);
}

export default ToggleSwitch;