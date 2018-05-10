import React from 'react';
import styled from 'styled-components';
import NoteList from "./NoteList";

const Wrapper = styled.main`
  background: pink
`

const Main = () => (
  <Wrapper className="container">
    Main
      <NoteList/>
  </Wrapper>
)

export default Main;