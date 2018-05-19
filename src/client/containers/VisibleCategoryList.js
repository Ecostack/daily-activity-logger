import { connect } from 'react-redux';
import CategoryList from "../components/CategoryList";

const mapStateToProps = state => {
	return {
		notes: state.notes.notes,
		onCategoryClick:(label) =>{
			console.log(label);
			
		}
	}
};

const VisibleCategoryList = connect(
	mapStateToProps,
)(CategoryList)
export default VisibleCategoryList