import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 20px;
    width: 100vw;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Title = styled.h4`
    width: 60vw;
    text-align: center;
    font-size: 22px;
    font-weight: normal;
`;

const Holder = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const ApiBox = styled.div`
    width: 300px;
    height: 300px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export default class Info extends Component {
    render() {
        return (
            <Container>
                <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eius quas recusandae ex voluptas ab perferendis enim, cum vitae iste, deleniti a ullam consequuntur optio, temporibus adipisci repellat in dicta!</Title>
                <Holder>
                    <ApiBox></ApiBox>
                    <ApiBox></ApiBox>
                    <ApiBox></ApiBox>
                    <ApiBox></ApiBox>
                </Holder>
            </Container>
        )
    }
}
