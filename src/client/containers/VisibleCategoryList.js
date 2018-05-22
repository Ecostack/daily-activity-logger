import { connect } from 'react-redux';
import CategoryList from "../components/CategoryList";
import { fetchNotesWithCategory } from '../actions/notes';

const mapStateToProps = state => {
	return {
		categories: state.categories.categories
	}
};

const mapDispatchToProps = dispatch =>  {
	return {
		onCategoryClick:(label) =>{
			dispatch(fetchNotesWithCategory(label));
		}
	}
}

const VisibleCategoryList = connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoryList)
export default VisibleCategoryList