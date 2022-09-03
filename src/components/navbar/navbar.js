import React from 'react';
import {
  Nav, 
  NavLink, 
  Bars, 
  NavMenu, 
  NavBtnLink
} from './navbar-elements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require('../../images/shokuyoku_logo.png')} height = "90" alt="shokuyoku"/> 
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/restaurant-list" activeStyle>
                Restaurants
            </NavLink>
            <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar
