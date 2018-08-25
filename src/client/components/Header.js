import React from 'react';
import styled from 'styled-components';
import LogoutButton from "../containers/LogoutButton";

const Wrapper = styled.header`
  background: #343a40;
  color: #fff;
  padding: 1em 0 0 1em;
  font-size: 16px;

  /*fixed top*/
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  z-index:1;
`


const Header = (props) => (
    <Wrapper>
        <div>
            ACTIVITY-LOGGER
        </div>
        <LogoutButton/>
    </Wrapper>
)

export default Header;  