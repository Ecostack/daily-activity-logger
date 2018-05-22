import { connect } from 'react-redux';
import NavigationList from "../components/NavigationList";
import { fetchNotes } from '../actions/notes';

const mapStateToProps = state => {

};

export const NAVIGATION_ALL_NOTES = 'ALL';

const mapDispatchToProps = dispatch =>  {
	return {
		onNavigationClick:(label) =>{
			console.log(label);
			if(label == null){
				console.error(`navigation-label is null`);
			}
			else{
				switch(label){
					case NAVIGATION_ALL_NOTES:
						dispatch(fetchNotes());
					break;
					default: 
						console.error(`unknown navigation-label: `+label);
					break;
				}
			}
		}
	}
}

const VisibleNavigationList = connect(
	mapStateToProps,
	mapDispatchToProps
)(NavigationList)
export default VisibleNavigationList