import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { loadUser } from '../actions/authActions';
import { theme } from '../styles';
const { colors } = theme;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${colors.PaleGreen};
    padding-top: 120px;
`;

const Title = styled.h1`
    margin-bottom: 30px;
`;

const Holder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 500px;
    margin-bottom: 30px;
`;

const AreaInput = styled.input`
    width: 500px;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 18px;
    box-sizing: border-box;
    word-wrap: break-word;
`
const TokenInput = styled.textarea`
    width: 500px;
    padding: 12px 20px;
    margin: 8px 0;
    font-size: 18px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: none;
    min-height: 100px;
`;

class Profile extends Component {

    render() {
        const { user } = this.props;
        
        return (
            <Route>
                {this.props.isAuth ? <Redirect to="/" /> : 
                    <Container>
                        <Title>Account Details</Title>
                        <Holder>
                            <h2>Name</h2>
                            <AreaInput 
                                type="text"
                                name="name"
                                value={user.name}
                                disabled></AreaInput>
                        </Holder>
                        <Holder>
                            <h2>Email</h2>
                            <AreaInput
                                type="text"
                                id="email"
                                name="email"
                                value={user.email}
                                disabled></AreaInput>
                        </Holder>
                        <Holder>
                            <h2>Api-Key</h2>
                            <TokenInput
                                type="text"
                                id="token"
                                name="token" 
                                value={user.token}
                                disabled />
                        </Holder>
                    </Container>
                }
            </Route>
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth == null,
    user: state.auth.user
});

const mapDispatchToProps = dispatch => {
    return {
      onTryAutoSignIn: () => dispatch(loadUser()),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Profile);