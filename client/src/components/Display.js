import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position:relative;
    width: 100vw;
    height: 700px;
    background-color: #46B29D;
    &:before {
        content:'';
        position:absolute;
        top:0;
        right:0;
        width: 0; 
        height: 0; 
        border-top: 200px solid white; 
        border-left: 100vw solid transparent; 
    }
`;

const ApiBox = styled.div`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 550px;
    height: 400px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export default class Display extends Component {
    render() {
        return (
            <Container>
                <ApiBox></ApiBox>
            </Container>
        )
    }
}
