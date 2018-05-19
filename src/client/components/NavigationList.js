import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem';

const Bulletless = styled.ul`
	list-style-type: none;
	width: 100%;
	padding: 0 1em 0 1em;
`;

const NavigationList = ({ notes, onNavigationClick }) => {
	return (
		<nav>
		<Bulletless>
			{<NavigationItem label='All' onClick={() => onNavigationClick('All')} />}
			{/*notes.map((note, index) => (
				<NavigationItem key={index} {...note} onClick={() => onNavigationClick(index)} />
			))*/}
		</Bulletless>
		</nav>
	)
}

export default NavigationList