import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import { loadUser } from './actions/authActions';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignIn();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={Hero} />
        <Redirect to="/" />
      </Switch>
    );

    if(this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/account" exact component={Profile} />
          <Route path="/" component={Hero} />  
        </Switch>
      );
    }

    return (
      <div className="App">
        <Navbar />
        {routes}
      </div>    
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !==null
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(loadUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);