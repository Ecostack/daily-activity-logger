import { connect } from 'react-redux';
import NavigationList from "../components/NavigationList";

const mapStateToProps = state => {
	return {
		notes: state.notes.notes,
		onNavigationClick:(label) =>{
			console.log(label);
			
		}
	}
};

const VisibleNavigationList = connect(
	mapStateToProps,
)(NavigationList)
export default VisibleNavigationList