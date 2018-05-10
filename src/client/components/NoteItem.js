import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  background: pink
`

const NoteItem = (props) => {
	return (
		<span>{props.text}</span>
	)
}

export default NoteItem;