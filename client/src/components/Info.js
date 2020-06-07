import React, { Component } from 'react';
import styled from 'styled-components';
import Free from './icons/Free';
import Integration from './icons/Integration';
import Secure from './icons/Secure';
import Speed from './icons/Speed';
import { theme, media } from '../styles';
const { colors } = theme;

const Container = styled.div`
    margin-top: 50px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1.85rem 1rem;
    background: transparent;
    ${media.phone`
        padding: 10px;
    `}
`;

const Title = styled.h4`
    width: 70vw;
    text-align: center;
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 20px;
    line-height: 1.5;
    .strong {
        font-weight: 700;
        font-size: 28px;
        color: ${colors.darkPale};
    }
    ${media.tablet`
        width: 95vw;
    `}
    ${media.phablet`
        font-size: 20px;
        .strong {
            font-size: 24px;
        }
    `}
`;

const Holder = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
    padding: 0 2.5rem;
    align-items: center;
    ${media.giant`
        width: 100%;
    `}
    ${media.tablet`
        padding: 0 0.5rem;
    `}
`;

const ApiBox = styled.div`
    width: 300px;
    height: 300px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    margin: 15px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.1);
    ${media.tablet`
        width: 280px;
        margin: 10px;
    `}
    ${media.thone`
        width: 400px;
    `}
    ${media.phone`
        width: 280px;
    `}
`;

const ImgHold = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${colors.bgPale};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Contain = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    h4 {
        font-size: 24px;
        margin: 15px 0;
        color: ${colors.PaleGreen};
    }
    span {
        text-align: center;
        font-size: 16px;
        line-height: 1.5;
        color: ${colors.dull};
        ${media.phablet`
            font-size: 18px;
        `}
    }
`;

const Hold = styled.div`
    width: 80px;
    padding: 10px;
    svg {
        display: block;
        margin: 0 auto;
    }
    .main {
        stroke: ${colors.PaleGreen};
        fill: ${colors.PaleGreen};
    }
`;

export default class Info extends Component {
    render() {
        return (
            <Container>
                <Title><span className="strong">Covid Nigeria </span> is a well detailed, simple and easy to use api that return JSON data from coronavirus cases and more for all states in Nigeria</Title>
                <Holder>
                    <ApiBox>
                        <Contain>
                            <ImgHold>
                                <Hold>
                                    <Speed />
                                </Hold>
                            </ImgHold>
                            <h4>Speed</h4>
                            <span>We provide very fast response to request by caching and pagination of data</span>
                        </Contain>
                    </ApiBox>
                    <ApiBox>
                        <Contain>
                            <ImgHold>
                                <Hold>
                                    <Free />
                                </Hold>
                            </ImgHold>
                            <h4>It's Free</h4>
                            <span>We also Provide a free service which you to benefit of this at no cost</span>
                        </Contain>
                    </ApiBox>
                    <ApiBox>
                        <Contain>
                            <ImgHold>
                                <Hold>
                                    <Integration />
                                </Hold>
                            </ImgHold>
                            <h4>Easy Integration</h4>
                            <span>You can easily integrate this by making simple HTTP request to get JSON data.</span>
                        </Contain>
                    </ApiBox>
                    <ApiBox>
                        <Contain>
                            <ImgHold>
                                <Hold>
                                    <Secure />
                                </Hold>
                            </ImgHold>
                            <h4>Data Integrity</h4>
                            <span>Our data is gotten from the Nigeria Center for Diesease Control therfore it is correct and reliable.</span>
                        </Contain>
                    </ApiBox>
                </Holder>
            </Container>
        )
    }
}
