import React from 'react';
import styled from 'styled-components';
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';

const Bulletless = styled.ul`
	list-style-type: none;
	width: 100%;
	padding: 0 1em 0 1em;
`;

const NoteList = ({ notes, onTodoClick }) => {
	return (
		<Bulletless>
			{notes.map((note, index) => (
				<NoteItem key={index} {...note} onClick={() => onTodoClick(index)} />
			))}
		</Bulletless>
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