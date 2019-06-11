import React, { Component } from 'react';
import styled from 'styled-components'

const Button = styled.button`
    z-index: 1;
    position: relative;
    color: white;
    text-transform: uppercase;
    padding: 1em 1em;
    outline: none;
    margin: 40px auto;
    text-align: center;
    border: none;
    font-size: 0.9rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    background-color: #FE9C05;

    ::before {
        content: '';
        z-index: -1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #953904;
        transform-origin: center left;
        transform: scaleX(0);
        transition: transform 0.25s ease-in-out;
        
    }

    :hover {
        cursor: pointer;
    }

    :hover::before {
        transform-origin: center right;
        transform: scaleX(1);
    }
}

`

class ClaimButton extends Component {
    state = {  }
    render() { 
        return (
            <>
                <Button>Claim this offer now</Button>
            </>
        );
    }
}
 
export default ClaimButton;