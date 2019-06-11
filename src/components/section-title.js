import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: #FE9C05;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    text-transform: uppercase;
    text-align: center;
    margin: 30px 0;
`

class SectionTitle extends Component {
    state = {  }
    render() { 
        return (
            <>
                <Title>{this.props.children}</Title>
            </>
        );
    }
}
 
export default SectionTitle;