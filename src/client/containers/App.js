import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import Header from './../components/Header';
import Main from './../components/Main';
import VisibleNavigationList from '../containers/VisibleNavigationList';
import VisibleCategoryList from '../containers/VisibleCategoryList';

const Navbar = styled.div`
    position: absolute;
    top: 56px;
    left: 0;
    width: 256px;
    background: #343a40;
    height: calc(100vh - 56px);
    box-sizing: border-box;
`;

const App = () => (
  <div>
    <Header />
    <Navbar>
        <VisibleNavigationList/>
        <VisibleCategoryList/>
    </Navbar>
      <Main />
  </div>
)

export default connect()(App);