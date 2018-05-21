import React from 'react';
import styled from 'styled-components';
import NoteList from "./NoteList";
import AddNote from "../containers/AddNote";
import VisibleNoteList from "../containers/VisibleNoteList";
import VisibleNavigationList from '../containers/VisibleNavigationList';
import VisibleCategoryList from '../containers/VisibleCategoryList';

const WrapperContent = styled.main`
  background: white;
  margin-top: calc(56px + 1em);
  margin-left: 256px;

  position: relative;
  min-height: calc(100vh - 56px);
  width: calc(100% - 256px);
  box-sizing: border-box;
`;

const WrapperFilter = styled.div`
  background: #343a40;
  padding-bottom: 0.5em;

  position: sticky;
  top: 56px;
  left: 256px;
  width: calc(100% - 256px);
  z-index:1;
`;

const Navbar = styled.nav`
  background: #343a40;
    
  /*fixed navigation*/
  position: fixed;
  top: 56px;
  left: 0;
  width: 256px;
  height: calc(100vh - 56px);
  z-index:1;
`;

const Main = () => (
  <div>
    <Navbar>
		  <VisibleNavigationList/>
		  <VisibleCategoryList/>
	  </Navbar>
    <WrapperFilter>
      <AddNote/>
    </WrapperFilter>
    <WrapperContent>
      <VisibleNoteList/>
    </WrapperContent>
  </div>
)

export default Main;