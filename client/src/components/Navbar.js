import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { media, theme } from '../styles';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 11;
  width: 100%;
  background-color: transparent;
  height: 100px;
  padding: 0px 50px;
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;
`;

const StyledHamburger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;
const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;
const StyledHamburgerInner = styled.div`
  background-color: red;
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: red;
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? theme.hamBeforeActive : theme.hamBefore)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? theme.hamAfterActive : theme.hamAfter)};
  }
`;

const Logo = styled.h1`
  color: #000;
  a {
    text-decoration: none;
  }
`;

const StyledHold = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledItem = styled.a`
  margin: 0 5px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: #000;
  padding: 0.45rem 1rem;
  transition: .3s ease-in-out;
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    border-radius: 10px;
    color: #000;
    background: #dddddd8c;
  }
`;

const StyledLogin = styled(Link)`
  margin: 0 10px;
  font-size: 18px;
  text-decoration: none;
  color: #000;
  line-height: 1;
  background-color: white;
  border: none;
  border-radius: 20px;
  transition: .3s ease-in-out;
  padding: 0.55rem 1.5rem;
  &:hover,
  &:focus,
  &:active {
      background-color: transparent;
      border: 2px solid white;
      padding: 0.45rem 1.5rem;
  }
`;

const StyledSign = styled(Link)`
  margin: 0 10px;
  font-size: 18px;
  text-decoration: none;
  color: white;
  line-height: 1;
  background-color: #000;
  border: none;
  border-radius: 20px;
  transition: .3s ease-in-out;
  padding: 0.55rem 1.5rem;
  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
    border: 2px solid #000;
    padding: 0.45rem 1.5rem;
  }
`;

const Logout = styled.div`
  margin: 0 10px;
  font-size: 18px;
  text-decoration: none;
  color: white;
  line-height: 1;
  background-color: salmon;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: .3s ease-in-out;
  padding: 0.55rem 1.5rem;
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    background-color: transparent;
    border: 2px solid salmon;
    padding: 0.45rem 1.5rem;
  }
`;

class Navbar extends Component {
  state = {
    isMounted: !this.props.isHome,
    menuOpen: false,
    scrollDirection: 'none',
    lastScrollTop: 0,
  };

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  render() {
    const { isMounted, menuOpen, scrollDirection } = this.state;
    const { auth } = this.props;

    return (
      <Container>
        <StyledNav>
          <Logo><a href="/">Covid Nigeria</a></Logo>
          { !auth.isAuth ? 
            <StyledHold>
              <StyledItem href="/">Api Documentaion</StyledItem>
              <StyledLogin to="/login">Login</StyledLogin>
              <StyledSign to="/signup">Signup</StyledSign>
            </StyledHold> : 
            <StyledHold>
              <StyledItem href="/">Api Documentaion</StyledItem>
              <StyledLogin to="/account">Account</StyledLogin>
              <Logout onClick={this.props.logout}>Logout</Logout>
            </StyledHold>
          }
          <TransitionGroup component={null}>
              <CSSTransition classNames="fade" timeout= "500">
                <StyledHamburger onClick={this.toggleMenu}>
                  <StyledHamburgerBox>
                    <StyledHamburgerInner menuOpen={menuOpen} />
                  </StyledHamburgerBox>
                </StyledHamburger>
              </CSSTransition>
          </TransitionGroup>
        </StyledNav>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);