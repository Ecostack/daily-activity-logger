import React from 'react'
import PropTypes from 'prop-types';
const NoteItem = ({ onClick, completed, notice }) => (
	<li
	>
		{notice}
	</li>
)
NoteItem.propTypes = {
	notice: PropTypes.string.isRequired
}
export default NoteItem;