import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
text-decoration: none;
margin: 1px;
width: 100%;

  background: #adb5bd;
  &:hover {
	background: #868e96;
  }
`;

const NoteItem = ({ onClick, completed, notice }) => (
	<ListItem>
		{notice}
	</ListItem>
)

NoteItem.propTypes = {
	notice: PropTypes.string.isRequired
}

export default NoteItem;