import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { login } from '../actions/authActions';
import PropTypes from 'prop-types';
import './Login.css';
import { media } from '../styles';


const Cont = styled.div`
    width: 60vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
        .form-container {
            form {
            }
        }
    }
    ${media.desktop`
        width: 80vw;
    `}
    ${media.tablet`
        .container {
            height: 380px;
        }
    `}
    ${media.thone`
        .container {
            height: 480px;
            .form-container {
                top: 35%;
                height: 60%;
                form {
                    padding: 0 30px;
                }
            }
            .sign-in-container {
                width: 100%;
            }
            .overlay-container {
                height: 35%;
                width: 100%;
            }
        }
    `};
    ${media.phone`
        .container {
            .form-container {
                form {
                    padding: 0 30px;
                }
            }
        }
    `}
`;

const Input = styled.input`
    background-color: #eee;
    padding: 12px 15px;
    margin: 10px 0;
    width: 100%;
    border-radius: 2px;
    border: 1.5px solid ${props => (props.touched ? props.valid ? 'green' : 'red' : 'white')};
    &:focus {
        border: 1.5px solid ${props => (props.touched ? props.valid ? 'green' : 'red' : 'black')};
        outline: none;
    }
`;

const Holder = styled.div`
    width: 100%;
    background: salmon;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`;

class Login extends Component {
    state = {
        email: {
            value: '',
            valid: false,
            touched: false,
        },
        password: {
            value: '',
            valid: false,
            touched: false
        },
        msg: null
    }

    static propTypes = {
        isAuth: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps, prevState) {
        const { error } = this.props;
        if(error !== prevProps.error) {
            if(error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }        
    }

    onChange = e => {
        var validate = false;
        var val = e.target.value;
        const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        if(e.target.name === 'email') {            
            validate = pattern.test(e.target.value);
        }
        if(e.target.name === 'password') {
            validate = val.length >= 6 && val.length <= 10;
        }
        this.setState({
             [e.target.name]: {
                 value: e.target.value,
                 valid: validate,
                 touched: true
             }
        });
    };

    onSubmit= e => {
        e.preventDefault();

        const email = this.state.email.value;
        const password = this.state.password.value;
        const user = {
            email,
            password
        }

        this.props.login(user);
    }

    render() {
        return (
            <Route>
                { this.props.isAuth ? <Redirect to="/" /> : 
                    <div className="Contain">
                        <Cont>
                            <div className="container">
                                <div class="form-container sign-in-container">
                                    {this.state.msg ? 
                                        <Holder><h4>{ this.state.msg }</h4></Holder> : null
                                    }
                                    <form onSubmit={this.onSubmit}>
                                        <h1>Sign in</h1>
                                        <span>or use your account</span>
                                        <Input 
                                            type="email"
                                            valid={this.state.email.valid}
                                            touched={this.state.email.touched}
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            onChange={this.onChange} />
                                        <Input 
                                            type="password"
                                            valid={this.state.password.valid}
                                            touched={this.state.password.touched}
                                            name="password"
                                            id="password"
                                            placeholder="Password min of 8 characters"
                                            onChange={this.onChange} />
                                        <button disabled={!this.state.email.valid || !this.state.password.valid}>Sign In</button>
                                    </form>
                                </div>
                                <div class="overlay-container">
                                    <div class="overlay">
                                        <div class="overlay-panel overlay-right">
                                            <h1>Welcome Back</h1>
                                            <p>Enter your details to continue enjoying our services</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Cont>
                    </div>
                }
            </Route>
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    error: state.error
});

export default connect(mapStateToProps, { login })(Login);