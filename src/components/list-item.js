import React, { Component } from 'react';
import styled from 'styled-components';

const Block = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 3px auto;
    max-width: 800px;
    justify-content: space-between;
`
const Dot = styled.div`
    width: 0.4rem;
    height: 0.4rem;
    background-color: #FE9C05;
    border-radius: 0.4rem;
`
const Text = styled.p`
    font-weight: 300;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    margin: 0 0 0 20px;
`
class ListItem extends Component {
    state = {  }
    render() { 
        return (
            <Block>
                <Dot />
                <Text>{this.props.children}</Text>
            </Block>
        );
    }
}

export default ListItem;