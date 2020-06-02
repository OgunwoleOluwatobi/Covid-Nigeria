import React, { Component } from 'react';
import styled from 'styled-components';
import Display from './Display';
import Login from './Login';
import covidapi from '../assets/covidapi.png';
import Info from './Info';

const Container = styled.div`
    position: relative;
    top: 0;
    width: 100vw;
    height: 120vh;
    overflow-x: hidden;   
    .img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 120vh;        
        z-index: 0;
        transform: skewY(6deg);
        transform-origin: top right;
        object-fit: cover
    }
`;

const Hold = styled.div`
    position: absolute;
    top: 0;
    left: 0%;
    bottom: 0;
    right: 0;
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Head = styled.h1`
    font-size: 45px;
    margin-bottom: 180px;
`;

const ApiBox = styled.div`
    width: 700px;
    height: 500px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export default class Hero extends Component {
  render() {
    return (
      <>
        <Container>
            <img src={covidapi} className="img" />
            <Hold>
                <Head>Cornavirus Api For Nigeria</Head>
              <ApiBox></ApiBox>
            </Hold>
        </Container>
        <Info />
        <Display />
      </>
    )
  }
}
