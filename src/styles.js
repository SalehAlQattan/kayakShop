// styled-components
import styled, { createGlobalStyle } from 'styled-components';
// router
import { NavLink } from 'react-router-dom';
// icons
import { RiAddCircleFill } from 'react-icons/ri';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
    text-align: center;
    margin: 0 auto;
  }
`;

export const ToggleButton = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background: ${(props) => props.theme.mainColor};
  padding: 7px;
  border-radius: 7px;
  font-weight: bold;
  cursor: pointer;
`;

export const HerroImage = styled.img`
  width: 90%;
  display: block;
  margin: 0 auto;
`;

export const InputField = styled.input`
  margin: 2rem;
  width: 70%;
  padding: 1rem;
  border: 2px solid;
  border-radius: 5px;
  font-size: 1rem;
`;

export const ProductContainer = styled.div`
  cursor: pointer;
  img {
    width: 250px;
    height: 250px;
    object-fit: contain;
  }
`;

export const KayaksContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5rem;
  text-align: center;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  margin: 1rem auto;
  img {
    margin-top: 1rem;
    width: 700px;
  }
`;

export const DeleteButtonStyled = styled.button`
  color: ${(props) => props.theme.red};
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
`;

export const BackButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
`;

export const NavigationBar = styled.div`
  background: #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export const NavProduct = styled(NavLink)`
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.mainColor};
  &.active {
    color: ${({ theme }) => theme.red};
    font-weight: bold;
  }
  text-decoration: none;
  text-transform: uppercase;
`;

export const Logo = styled(NavLink)`
  img {
    width: 50%;
  }
`;

export const RiAddCircleFillStyled = styled(RiAddCircleFill)`
  color: ${({ theme }) => theme.mainColor};
  background: ${({ theme }) => theme.backgroundColor};
`;

export const UpdateButtonStyled = styled.button`
  color: orange;
  margin: 1rem;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
`;

export const ListContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;
