import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  background: palevioletred;
  color: white;
  border: 2px solid palevioletred;
  width: 100%;
`;

const ListItem = styled.li`
text-decoration: none;
padding: 1px;
`;

const CategoryItem = ({ onClick, label }) => (
	<ListItem>
		<Button onClick={onClick}>{label}</Button>
	</ListItem>
)
CategoryItem.propTypes = {
	label: PropTypes.string.isRequired
}
export default CategoryItem;