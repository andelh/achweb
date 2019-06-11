import React, { Component } from 'react';
import logo from '../images/AH.png'

//NPM
import styled from 'styled-components'
import { Link } from 'gatsby';

const NavContainer = styled.div`
    background-color: #030405;
    box-shadow: 0 2px 7px rgba(0,0,0,0.65);
    width: 100%;
    padding: 30px;
    position: fixed;
    z-index: 99;

`

const NavLogo = styled.img`
    margin: 0 auto;
    display: block;
    width: 200px;
`


class Navbar extends Component {
    render() { 
        return (
            <NavContainer>
                <Link to="/">
                    <NavLogo src={logo} />
                </Link>
            </NavContainer>
        );
    }
}
 
export default Navbar;