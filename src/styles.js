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

export const HerroImage = styled.img`
  width: 90%;
  display: block;
  margin: 0 auto;
`;

export const ProductContainer = styled.div`
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
