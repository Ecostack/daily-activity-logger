import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import Header from './../components/Header';
import Main from './../components/Main';


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default connect()(App);