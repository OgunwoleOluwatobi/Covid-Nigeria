import React, { Component } from 'react';
import styled from 'styled-components';
import './Login.css';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../actions/authActions';
import { media } from '../styles';


const Cont = styled.div`
    width: 60vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
            .sign-up-container {
                width: 100%;
                right: 100%;
            }
            .overlay-container-up {
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

class Signup extends Component {
    state = {
        name: {
            value: '',
            valid: false,
            touched: false,
        },
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
        register: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps, prevState) {
        const { error } = this.props;
        if(error !== prevProps.error) {
            if(error.id === 'REGISTER_FAIL') {
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
        
        if(e.target.name === 'name') {            
            validate = val.length !== 0;
        }
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

        const name = this.state.name.value;
        const email = this.state.email.value;
        const password = this.state.password.value;

        const newUser = {
            name,
            email,
            password
        };
        this.props.register(newUser);
    }

    render() {
        return (
            <Route>
                { this.props.isAuth ? <Redirect to="/account" /> : 
                <div className="Contain">
                    <Cont>
                        <div className="container right-panel-active">
                            <div class="form-container sign-up-container">
                                {this.state.msg ? 
                                    <Holder><h4>{ this.state.msg }</h4></Holder> : null
                                }
                                <form onSubmit={this.onSubmit}>
                                    <h1>Create Account</h1>
                                    <span>or use your email for registration</span>
                                    <Input 
                                        type="text"
                                        valid={this.state.name.valid}
                                        touched={this.state.name.touched}
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        onChange={this.onChange} />
                                    <Input
                                        type="email"
                                        name="email"
                                        valid={this.state.email.valid}
                                        touched={this.state.email.touched}
                                        id="email"
                                        placeholder="Email"
                                        onChange={this.onChange} />
                                    <Input
                                        type="password"
                                        name="password"
                                        valid={this.state.password.valid}
                                        touched={this.state.password.touched}
                                        id="password"
                                        placeholder="Password"
                                        onChange={this.onChange} />
                                    <button>Sign Up</button>
                                </form>
                            </div>
                            <div class="overlay-container-up">
                                <div class="overlay">
                                    <div class="overlay-panel overlay-left">
                                        <h1>Welcome Back!</h1>
                                        <p>
                                            Enter your details to start a wonderfuls experience with us
                                        </p>
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

export default connect(mapStateToProps, { register })(Signup);