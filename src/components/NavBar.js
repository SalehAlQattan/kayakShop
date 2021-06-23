// image
import logo from '../images/logo.png';
// styles
import { ToggleButton, NavProduct, Logo } from '../styles';

/***************************
  Try to Add Dark Mode logo
****************************/

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div>
      <Logo to="/">
        <img src={logo} />
      </Logo>
      <ToggleButton onClick={() => setIsDarkMode((prevState) => !prevState)}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </ToggleButton>
      <NavProduct to="/products">Products</NavProduct>
    </div>
  );
};

export default NavBar;
