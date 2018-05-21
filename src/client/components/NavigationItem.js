import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  background: #212529;
  border: 2px solid #212529;
  width: 100%;

  color: #868e96;
	&:hover {
		color: #adb5bd;
	}
`;

const ListItem = styled.li`
text-decoration: none;
padding: 1px;
`;

const NavigationItem = ({ onClick, label }) => (
	<ListItem>
		<Button onClick={onClick}>{label}</Button>
	</ListItem>
)

NavigationItem.propTypes = {
	label: PropTypes.string.isRequired
}
export default NavigationItem;