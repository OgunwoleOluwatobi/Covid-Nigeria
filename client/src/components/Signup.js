import React, { Component } from 'react';
import styled from 'styled-components';
import covidapi from '../assets/covidapi.png';
import './Login.css';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../actions/authActions';

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
        name: '',
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuth: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps, prevState) {
        const { error, isAuth } = this.props;
        if(error !== prevProps.error) {
            if(error.id === 'REGISTER_FAIL') {
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

        const { name, email, password } = this.state;

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
                    <div className="container right-panel-active">
                        <div class="form-container sign-up-container">
                            {this.state.msg ? 
                                <Holder><h4>{ this.state.msg }</h4></Holder> : null
                            }
                            <form onSubmit={this.onSubmit}>
                                <h1>Create Account</h1>
                                <span>or use your email for registration</span>
                                <input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    onChange={this.onChange} />
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
                                <button>Sign Up</button>
                            </form>
                        </div>
                        <div class="overlay-container-up">
                            <div class="overlay">
                                <div class="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p>
                                        To keep connected with us please login with your personal info
                                    </p>
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

export default connect(mapStateToProps, { register })(Signup);