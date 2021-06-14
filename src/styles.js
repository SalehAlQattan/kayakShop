import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.mainColor};
    text-align: center;
    width: 90%;
    margin: 0 auto;
  }
`;

export const ToggleButton = styled.button`
  color: ${props => props.theme.backgroundColor};
  background: ${props => props.theme.mainColor};
  padding: 10px;
  border-radius: 7px;
  font-size: 1.6rem;
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
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
`;

export const DetailsContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  img {
    margin-top: 3rem;
    width: 100%;
  }
`;
