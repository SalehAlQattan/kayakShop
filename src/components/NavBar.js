// image
import logo from '../images/logo.png';
// styles
import { ToggleButton, NavigationBar, NavProduct, Logo } from '../styles';

/***************************
  Try to Add Dark Mode logo
****************************/

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <NavigationBar>
      <Logo to="/">
        <img src={logo} />
      </Logo>
      <ToggleButton onClick={() => setIsDarkMode((prevState) => !prevState)}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </ToggleButton>
      <NavProduct to="/products">Products</NavProduct>
    </NavigationBar>
  );
};

export default NavBar;
