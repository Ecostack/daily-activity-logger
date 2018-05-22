import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem';
import { NAVIGATION_ALL_NOTES } from '../containers/VisibleNavigationList';

const Bulletless = styled.ul`
	list-style-type: none;
	width: 100%;
	padding: 0 1em 0 1em;
`;

const NavigationList = ({ onNavigationClick }) => {
	return (
		<Bulletless>
			{<NavigationItem label='All' onClick={() => onNavigationClick(NAVIGATION_ALL_NOTES)} />}
			{<NavigationItem label='unknown' onClick={() => onNavigationClick('unknown')} />}
			{<NavigationItem label='unknown2' onClick={() => onNavigationClick()} />}
		</Bulletless>
	)
}

export default NavigationList