import React, { Component } from 'react';
import styled from 'styled-components';
import Chart from './Chart';
import { media } from '../styles';

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 700px;
    background-color: #46B29D;
    display: flex;
    justify-content: center;
    &:before {
        content:'';
        position:absolute;
        top: -1px;
        right:0;
        width: 0; 
        height: 0; 
        border-top: 200px solid white; 
        border-left: 100vw solid transparent; 
    }
    ${media.desktop`
        &:before {
            border-top: 150px solid white;
        }
    `}
    ${media.tablet`
        &:before {
            border-top: 100px solid white;
        }
    `}
    ${media.phablet`
        &:before {
            border-top: 50px solid white;
        }
    `}
`;

const Holder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    padding: 0 0.5rem;
    z-index: 2;
    h1 {
        margin-bottom: 30px;
        font-size: 45px;
        text-align: center;
    }
    ${media.phablet`
        h1 {
            font-size: 35px;
        }
    `}
`;

const ApiBox = styled.div`
    width: 650px;
    height: 450px;
    background-color: white;
    padding: 0.85rem 2rem;
    border-radius: 20px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    ${media.tablet`
        width: 550px;
        height: 400px;
    `}
    ${media.thone`
        width: 90%;
        height: 350px;
    `}
    ${media.phablet`
        width: 90%;
        height: 300px;
    `}
    ${media.phone`
        height: 200px;
    `}
`;

class Display extends Component {
    render() {
        return (
            <Container>
                <Holder>
                    <h1>Coronavirus Dashboard</h1>
                    <ApiBox>
                        <Chart data={this.props.data} />
                    </ApiBox>
                </Holder>
            </Container>
        )
    }
}

export default Display;