import { connect } from 'react-redux';
import NoteList from "../components/NoteList";

const mapStateToProps = state => {
	return {
		notes: state.notes.notes
	}
};

const VisibleNoteList = connect(
	mapStateToProps,
)(NoteList)
export default VisibleNoteList