import React, { Component } from 'react';
import logo from '../images/AH.png'

//NPM
import styled from 'styled-components'

const NavContainer = styled.div`
    background-color: #030405;
    box-shadow: 0 2px 5px rgba(0,0,0,0.9);
    width: 100%;
    padding: 30px;
`

const NavLogo = styled.img`
    margin: 0 auto;
    display: block;
    width: 250px;
`


class Navbar extends Component {
    render() { 
        return (
            <NavContainer>
                <NavLogo src={logo} />
            </NavContainer>
        );
    }
}
 
export default Navbar;