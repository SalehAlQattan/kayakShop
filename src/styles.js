import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #dbe6fd;
    text-align: center;
    width: 90%;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  color: #293b5f;
`;

export const Subtitle = styled.h2`
  color: #47597e;
`;

export const HerroImage = styled.img`
  width: 90%;
  display: block;
  margin: 0 auto;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  color: #b2ab8c;
`;

export const ProductPrice = styled.h2`
  color: #293b5f;
`;

export const KayaksContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
`;
