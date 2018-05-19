import React from 'react';
import styled from 'styled-components';
import NoteList from "./NoteList";
import AddNote from "../containers/AddNote";
import VisibleNoteList from "../containers/VisibleNoteList";

const Wrapper = styled.main`
  background: pink;
  margin: 0 0 0 256px;
  position: relative;
  min-height: calc(100vh - 56px);
  width: calc(100% - 256px);
  overflow-x: hidden;
  box-sizing: border-box;
`

const Main = () => (
  <Wrapper >
      <AddNote/>
          <VisibleNoteList/>

  </Wrapper>
)

export default Main;