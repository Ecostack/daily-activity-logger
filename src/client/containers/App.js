import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import Header from './../components/Header';
import Main from './../components/Main';
import {Route, Switch, withRouter} from "react-router-dom";
import LoginMaterialUI from "./LoginMaterialUI";

const App = () => (
  <div>
    <Header/>
	  <Switch>
          <Route path="/" exact component={Main}/>
		  <Route path="/login" exact component={LoginMaterialUI}/>
		  <Route path="/register" exact render={()=><LoginMaterialUI isRegisterForm={true}/>}/>
	  </Switch>
  </div>
)


export default withRouter(connect()(App));