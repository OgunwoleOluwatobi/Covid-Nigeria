import React, { Component } from 'react';
import styled from 'styled-components';
import covidapi from '../assets/covidapi.png';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { login } from '../actions/authActions';
import PropTypes from 'prop-types';
import './Login.css';

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
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuth: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps, prevState) {
        const { error, isAuth } = this.props;
        if(error !== prevProps.error) {
            if(error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }        
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit= e => {
        e.preventDefault();

        const { email, password } = this.state;
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
                    <div className="container">
                        <div class="form-container sign-in-container">
                            {this.state.msg ? 
                                <Holder><h4>{ this.state.msg }</h4></Holder> : null
                            }
                            <form onSubmit={this.onSubmit}>
                                <h1>Sign in</h1>
                                <span>or use your account</span>
                                <input 
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={this.onChange} />
                                <input 
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    onChange={this.onChange} />
                                <a href="#">Forgot your password?</a>
                                <button>Sign In</button>
                            </form>
                        </div>
                        <div class="overlay-container">
                            <div class="overlay">
                                <div class="overlay-panel overlay-right">
                                    <h1>Welcome</h1>
                                    <p>Enter your personal details and start journey with us</p>
                                </div>
                            </div>
                        </div>
                    </div>
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