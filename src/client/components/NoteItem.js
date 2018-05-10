import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  background: pink
`

const NoteItem = (props) => {
	return (
		<span>{props.value}</span>
	)
}

export default NoteItem;