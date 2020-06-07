import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { media, theme } from '../styles';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { debounce } from '../utils';
import logo from '../assets/logo.png';
import LogoTwo from '../assets/logo2.png';
const { colors } = theme;

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 11;
  width: 100%;
  background-color: transparent;
  padding: 0px 150px;
  display: flex;
  justify-content: ${props => (props.menuOpen ? `space-between`: `center`)};
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  transition: ${theme.transition};
  height: ${props => (props.menuOpen ? `100vh` : props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight)};
  background-color: ${props => (props.menuOpen ? colors.white : props.scrollDirection === 'none' ? 'transparent' : colors.shadowBlack)};
  box-shadow: ${props => props.scrollDirection === 'none' ? 'none' : `0 20px 20px -10px ${colors.backBlack}`};
  ${media.bigDesktop`padding: 0 50px;`};
  ${media.tablet`padding: 0 25px;`};
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  height: ${props => (props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight)};
`;

const StyledNavo = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: none;
  transition: ${theme.transition};
  ${media.tablet`
    display: flex;
    transform: ${props => (props.menuOpen ? `translateY(0%)`: `translateY(-500%)`)};
  `};
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
  background-color: ${colors.deepPale};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 3px;
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
    background-color: ${colors.deepPale};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 3px;
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
    img {      
      width: 200px;
    }
  }
  ${media.tablet`
    a {
      img {
        margin-top: 5px;
        width: 180px;
      }
    }
  `};
  ${media.phablet`
    a {
      img {
        margin-top: 10px;
        width: 130px;
      }
    }
  `};
`;

const StyledHold = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.tablet`
    display: none;
  `};
`;

const StyledHamHold = styled.li`
  display: ${props => (props.menuOpen ? `flex` : `none`)};;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transition: ${theme.transition};
  height: 200px;
`;
const StyledItem = styled.a`
  margin: 0 5px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: #000;
  padding: ${props => (props.menuOpen ? `0.75rem 3rem` : `0.45rem 1.5rem`)};
  transition: .3s ease-in-out;
  background-color: ${props => (props.menuOpen ? `#dddddd8c` : `transparent`)};
  border-radius: 10px;
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    border-radius: 10px;
    color: #000;
    background: #dddddd8c;
    border: 2px solid ${props => (props.menuOpen ? colors.PaleGreen : `transparent`)};
  }
`;

const StyledLogin = styled(Link)`
  margin: 0 10px;
  font-size: 18px;
  text-decoration: none;
  color: #000;
  line-height: 1;
  font-weight: ${props => (props.menuOpen ? `600` : `500`)};
  background-color: ${props => (props.menuOpen ? `#dddddd8c` : props.scrollDirection === 'none' ? colors.white : colors.shadowPale)};
  border: none;
  border-radius: ${props => (props.menuOpen ? `10px` : `20px`)};
  border: 0px solid ${props => (props.scrollDirection === 'none' ? colors.white : colors.shadowPale)};
  transition: .3s ease-in-out;
  padding: ${props => (props.menuOpen ? `0.85rem 6.5rem` : `0.55rem 1.5rem`)};
  &:hover,
  &:focus,
  &:active {
      border-radius: ${props => (props.menuOpen ? `10px` : `20px`)};
      background-color: ${props => (props.menuOpen ? `#dddddd8c` : `transparent`)};
      border: 2px solid ${props => ( props.menuOpen ? colors.PaleGreen : props.scrollDirection === 'none' ? colors.white : colors.shadowPale)};
      padding: ${props => (props.menuOpen ? `0.75rem 6rem` : `0.45rem 1.5rem`)};
  }
`;

const StyledSign = styled(Link)`
  margin: 0 10px;
  font-size: 18px;
  text-decoration: none;
  color: ${props => (props.menuOpen ? `#000` : `white`)};
  line-height: 1;
  background-color: ${props => (props.menuOpen ? `#dddddd8c` : `#000`)};
  border: none;
  border-radius: ${props => (props.menuOpen ? `10px` : `20px`)};
  transition: .3s ease-in-out;
  padding: ${props => (props.menuOpen ? `0.85rem 6.5rem` : `0.55rem 1.5rem`)};
  font-weight: ${props => (props.menuOpen ? `600` : `500`)};
  &:hover,
  &:focus,
  &:active {
    color: #000;
    border-radius: ${props => (props.menuOpen ? `10px` : `20px`)};
    background-color: ${props => (props.menuOpen ? `#dddddd8c` : `transparent`)};
    border: 2px solid ${props => (props.menuOpen ? colors.PaleGreen : `#000`)};
    padding: ${props => (props.menuOpen ? `0.75rem 6rem` : `0.45rem 1.5rem`)};
  }
`;

const Logout = styled.div`
  margin: 0 10px;
  font-size: 18px;
  text-decoration: none;
  font-weight: ${props => (props.menuOpen ? `600` : `500`)};
  color: ${props => (props.menuOpen ? `red` : `white`)};
  line-height: 1;
  background-color: ${props => (props.menuOpen ? `#dddddd8c` : `salmon`)};
  border: none;
  border-radius: ${props => (props.menuOpen ? `10px` : `20px`)};
  cursor: pointer;
  transition: .3s ease-in-out;
  padding: ${props => (props.menuOpen ? `0.85rem 6.5rem` : `0.55rem 1.5rem`)};
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    background-color: ${props => (props.menuOpen ? `#dddddd8c` : `transparent`)};
    border: 2px solid salmon;
    padding: ${props => (props.menuOpen ? `0.75rem 6rem` : `0.45rem 1.5rem`)};
  }
`;

const DELTA = 5;

class Navbar extends Component {
  state = {
    isMounted: !this.props.isHome,
    menuOpen: false,
    scrollDirection: 'none',
    lastScrollTop: 0,
  };

  componentDidMount() {
    setTimeout(
        () => 
          this.setState({isMounted: true}, () => {
              window.addEventListener('scroll', () => debounce(this.handleScroll()));
              window.addEventListener('resize', () => debounce(this.handleResize()));
          })
    )
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', () => this.handleScroll());
      window.removeEventListener('resize', () => this.handleResize());
  }

  handleScroll = () => {
      const { isMounted, scrollDirection, lastScrollTop } = this.state;
      const fromTop = window.scrollY;

      if(!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA) {
          return;
      }

      if(fromTop < DELTA) {
          this.setState({ scrollDirection: 'none' });
      } else if (fromTop > lastScrollTop && fromTop > 100){
          if(scrollDirection !== 'down') {
              this.setState({ scrollDirection: 'down' });
          }
      } else if (fromTop + window.innerHeight < document.documentElement.scrollHeight) {
          if(scrollDirection !== 'up') {
              this.setState({ scrollDirection: 'up' })
          }
      }

      this.setState({ lastScrollTop: fromTop });
  }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  handleResize = () => {
    if (window.innerWidth > 768 && this.state.menuOpen) {
      this.toggleMenu();
      console.log(this.state.menuOpen);
      
    }
  };

    clickHandler = e => {
      const target = e.target;
      const isLink = target.hasAttribute('href');
      const isMenu = target.classList && target.classList[0].includes('StyledNavo');

      if(isLink || isMenu) {
        this.toggleMenu();
      }
    }

  render() {
    const { scrollDirection, lastScrollTop, menuOpen } = this.state;
    const { auth } = this.props;

    return (
      <Container scrollDirection={scrollDirection} fromTop={lastScrollTop} menuOpen={menuOpen}>
        <StyledNav scrollDirection={scrollDirection}>
          <Logo><a href="/">
            { this.state.scrollDirection === 'none' && !this.state.menuOpen ?
              <img src={logo} alt="logo" /> : <img src={LogoTwo} alt="logo" />
            }
          </a></Logo>
          { !auth.isAuth ? 
            <StyledHold>
              <StyledItem href="https://documenter.getpostman.com/view/9044884/SztK1jM5">Api Documentaion</StyledItem>
              <StyledLogin scrollDirection={scrollDirection} to="/login">Login</StyledLogin>
              <StyledSign to="/signup">Signup</StyledSign>
            </StyledHold> : 
            <StyledHold>
              <StyledItem href="https://documenter.getpostman.com/view/9044884/SztK1jM5">Api Documentaion</StyledItem>
              <StyledLogin scrollDirection={scrollDirection} to="/account">Account</StyledLogin>
              <Logout onClick={this.props.logout}>Logout</Logout>
            </StyledHold>
          }
          <TransitionGroup component={null}>
              <CSSTransition classNames="fade" timeout={500} >
                <StyledHamburger onClick={this.toggleMenu}>
                  <StyledHamburgerBox>
                    <StyledHamburgerInner menuOpen={menuOpen} />
                  </StyledHamburgerBox>
                </StyledHamburger>
              </CSSTransition>
          </TransitionGroup>
        </StyledNav>
        <StyledNavo menuOpen={menuOpen} onClick={this.clickHandler} aria-hidden={!menuOpen}>
        { !auth.isAuth ? 
            <StyledHamHold menuOpen={menuOpen}>
              <StyledItem menuOpen={menuOpen} href="https://documenter.getpostman.com/view/9044884/SztK1jM5">Api Documentaion</StyledItem>
              <StyledLogin menuOpen={menuOpen} scrollDirection={scrollDirection} to="/login">Login</StyledLogin>
              <StyledSign menuOpen={menuOpen} to="/signup">Signup</StyledSign>
            </StyledHamHold> : 
            <StyledHamHold menuOpen={menuOpen}>
              <StyledItem menuOpen={menuOpen} href="https://documenter.getpostman.com/view/9044884/SztK1jM5">Api Documentaion</StyledItem>
              <StyledLogin menuOpen={menuOpen} scrollDirection={scrollDirection} to="/account">Account</StyledLogin>
              <Logout menuOpen={menuOpen} onClick={this.props.logout}>Logout</Logout>
            </StyledHamHold>
          }
        </StyledNavo>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);