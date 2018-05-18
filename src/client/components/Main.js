import React from 'react';
import styled from 'styled-components';
import NoteList from "./NoteList";
import AddNote from "../containers/AddNote";
import VisibleNoteList from "../containers/VisibleNoteList";

const Wrapper = styled.main`
  background: pink
`

const Main = () => (
  <Wrapper className="container">
    Main
      <AddNote/>
          <VisibleNoteList/>
      {/*<NoteList/>*/}
  </Wrapper>
)

export default Main;