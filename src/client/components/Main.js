import React from 'react';
import styled from 'styled-components';
import NoteList from "./NoteList";
import AddNote from "../containers/AddNote";
import VisibleNoteList from "../containers/VisibleNoteList";
import VisibleNavigationList from '../containers/VisibleNavigationList';
import VisibleCategoryList from '../containers/VisibleCategoryList';

const Wrapper = styled.main`
  background: pink;
  margin: 0 0 0 256px;
  position: relative;
  min-height: calc(100vh - 56px);
  width: calc(100% - 256px);
  overflow-x: hidden;
  box-sizing: border-box;
`;

const Navbar = styled.div`
    position: absolute;
    top: 56px;
    left: 0;
    width: 256px;
    background: #343a40;
    height: calc(100vh - 56px);
    box-sizing: border-box;
`;

const Main = () => (
  <div>
  <Navbar>
		  <VisibleNavigationList/>
		  <VisibleCategoryList/>
	  </Navbar>
  <Wrapper >
      <AddNote/>
          <VisibleNoteList/>

  </Wrapper>
  </div>
)

export default Main;