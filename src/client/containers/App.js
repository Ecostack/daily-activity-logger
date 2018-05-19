import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import Header from './../components/Header';
import Main from './../components/Main';
import Login from "./Login";
import {Route, Switch} from "react-router-dom";


const App = () => (
  <div>
    <Header />
	  <Switch>
		  <Route path="/login" exact component={Login}/>
		  <Route path="/register" exact render={()=><Login isRegisterForm={true}/>}/>
		  <Route component={Main}/>
	  </Switch>
  </div>
)

export default connect()(App);