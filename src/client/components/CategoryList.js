import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

const Bulletless = styled.ul`
	list-style-type: none;
	width: 100%;
	padding: 0 1em 0 1em;
`;

const CategoryList = ({ categories, onCategoryClick }) => {
	return (
		<Bulletless>
			{categories.map((category, index) => (
				<CategoryItem key={index} {...category} label={category.category} onClick={() => onCategoryClick(category.category)} />
			))}
			{/* navigation-scrollbar test-data

			{<CategoryItem label='@category1' onClick={(e) => onCategoryClick('@category1')} />}
			{<CategoryItem label='@category2' onClick={(e) => onCategoryClick('@category2')} />}
			{<CategoryItem label='@home' onClick={(e) => onCategoryClick('@home')} />}
			{<CategoryItem label='@work' onClick={(e) => onCategoryClick('@work')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='@...' onClick={(e) => onCategoryClick('@...')} />}
			{<CategoryItem label='end' onClick={(e) => onCategoryClick('end')} />}
			*/}
		</Bulletless>
	)
}

CategoryList.propTypes = {
	categories: PropTypes.arrayOf(
		PropTypes.shape({
			category: PropTypes.string.isRequired
		}).isRequired
	).isRequired
}

export default CategoryList