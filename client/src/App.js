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
import firebase from './firebase';

class App extends Component {
  state = {
    chartData: {},
    isAuth: null,
    isToken: null
  }

  componentDidMount() {
    this.props.onTryAutoSignIn();
    const fetchData = async () => {
      const db = firebase.firestore();
      const dat = await db.collection("total").orderBy("data", "desc").limit(7).get();
      const total = [];
      const tdays = [];
      dat.docs.map(doc => 
        total.push(+doc.data().data[0].overallActiveCases)
      )
      dat.docs.map(doc => 
        tdays.push(doc.data().day)
      )
      this.setState({
        chartData: {
          labels: tdays.reverse(),
          datasets: [
              {
                label: 'Overall Active Cases',
                data: total.reverse(),
                backgroundColor: [
                    'rgba(70, 178, 156, 0.788)',
                    'rgba(70, 178, 156, 0.788)',
                    'rgba(70, 178, 156, 0.788)',
                    'rgba(70, 178, 156, 0.788)',
                    'rgba(70, 178, 156, 0.788)',
                    'rgba(70, 178, 156, 0.788)',
                    'rgba(70, 178, 156, 0.788)'
                ]
              }
          ],
        }
      });
    }
    fetchData()
  }

  componentWillMount() {
    this.setState({
      isAuth: this.props.isAuth,
      isToken: this.props.isToken
    })
  }
  

  render() {
    let routes = (
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={() => <Hero data={this.state.chartData} />} />
        <Redirect to="/" />
      </Switch>
    );

    if(this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/account" exact component={Profile} />
          <Route path="/" component={() => <Hero data={this.state.chartData} />} />
        </Switch>
      );
    }

    return (
      <div className="App">
        {this.props.isToken ? this.props.isAuth ? 
          <>
            <Navbar />
            {routes}
          </> : null :
          <>
            <Navbar />
            {routes}
          </>
        }
      </div>    
    );
  }
}

const mapStateToProps = state => {
  return {
    isToken: state.auth.token !== null,
    isAuth: state.auth.isAuth
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(loadUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);