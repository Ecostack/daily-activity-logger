import React from 'react';
import styled from 'styled-components';
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';

const NoteList = ({ notes, onTodoClick }) => {
	return (
		<ul>
			{notes.map((note, index) => (
				<NoteItem key={index} {...note} onClick={() => onTodoClick(index)} />
			))}
		</ul>
	)
}

NoteList.propTypes = {
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			notice: PropTypes.string.isRequired
		}).isRequired
	).isRequired
}
export default NoteList