import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

const Bulletless = styled.ul`
	list-style-type: none;
	width: 100%;
	padding: 0 1em 0 1em;
`;

const CategoryList = ({ notes, onCategoryClick }) => {
	return (
		<Bulletless>
			{/*notes.map((note, index) => (
				<CategoryItem key={index} {...note} onClick={() => onNCategoryClick(index)} />
			))*/}
			{<CategoryItem label='Test' onClick={(e) => onCategoryClick('Test')} />}
			{<CategoryItem label='Test2' onClick={(e) => onCategoryClick('Test2')} />}
		</Bulletless>
	)
}

export default CategoryList