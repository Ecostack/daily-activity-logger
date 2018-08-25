import React from 'react';
import styled from 'styled-components';
import AddNote from "../containers/AddNote";
import VisibleNoteList from "../containers/VisibleNoteList";
import VisibleNavigationList from '../containers/VisibleNavigationList';
import VisibleCategoryList from '../containers/VisibleCategoryList';

const WrapperContent = styled.main`
  background: white;
  margin-top: calc(56px + 1em);
  margin-left: 256px;

  position: relative;
  min-height: calc(1px); /*We need min-height to get the right position for the sticky filter. Empty content would destroy the layout.*/
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
  overflow-y: auto;
  overflow-x: hidden;
`;

const Main = (props) => (
  <div>
    <Navbar location={props.location}>
		  <VisibleNavigationList/>
		  <VisibleCategoryList/>
	  </Navbar>
    <WrapperFilter location={props.location}>
      <AddNote/>
    </WrapperFilter>
    <WrapperContent location={props.location}>
      <VisibleNoteList/>
    </WrapperContent>
  </div>
)

export default Main;