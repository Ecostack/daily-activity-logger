import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import Header from './../components/Header';
import Main from './../components/Main';
import Login from "./Login";
import {Route, Switch, withRouter} from "react-router-dom";

const App = () => (
  <div>
    <Header/>
	  <Switch>
          <Route path="/" exact component={Main}/>
		  <Route path="/login" exact component={Login}/>
		  <Route path="/register" exact render={()=><Login isRegisterForm={true}/>}/>
	  </Switch>
  </div>
)


export default withRouter(connect()(App));