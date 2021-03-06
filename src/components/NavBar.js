// image
import logo from '../images/logo.png';

// styles
import { ToggleButton, NavigationBar, NavItem, Logo } from '../styles';

// buttons
import SignupButton from './buttons/SignupButton';
import SigninButton from './buttons/SigninButton';
import SignoutButton from './buttons/SignoutButton';

// stores
import authtStore from '../stores/authStore';

// mobx
import { observer } from 'mobx-react';
/***************************
  Try to Add Dark Mode logo
****************************/

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <NavigationBar>
      <Logo to="/">
        <img src={logo} alt="logo" />
      </Logo>
      <ToggleButton onClick={() => setIsDarkMode((prevState) => !prevState)}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </ToggleButton>
      <NavItem to="/products">kayaks</NavItem>
      <NavItem to="/manufactures">manufactures</NavItem>
      {authtStore.user ? (
        <>
          <h4>Hello {authtStore.user.username}</h4>
          <SignoutButton signuot={authtStore.signuot} />
        </>
      ) : (
        <>
          <SignupButton />
          <SigninButton />
        </>
      )}
    </NavigationBar>
  );
};

export default observer(NavBar);
