import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constatns';

const Wrapper = styled.a`
  display: block;
  cursor: pointer;
  width: 220px;
  margin: 0 70px 40px 0;

  &:nth-of-type(3n) {
    margin-right: 0;
  }

  &,
  &:hover {
    text-decoration: none;
  }

  @media (max-width: 840px) {
    margin: 0 15px 40px;
  }
`;
const ImgWrapper = styled.div`
  width: 220px;
  height: 220px;
  border: 3px solid ${COLORS.border};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  img {
    height: 120px;
    width: auto;
  }
`;
const Title = styled.h3`
  font-size: 14px;
  color: ${COLORS.text};
  font-weight: 400;
  margin: 0 0 9px;
`;
const Price = styled.div`
  font-size: 18px;
  color: black;
  font-weight: 600;
  line-height: 1;
`;

function Product({ img, title, price, currency, href }) {
  return (
    <Wrapper href={href}>
      <ImgWrapper>
        <img src={img} alt={title} />
      </ImgWrapper>
      <Title>{title}</Title>
      <Price>
        {currency} {price}
      </Price>
    </Wrapper>
  );
}

export default Product;
