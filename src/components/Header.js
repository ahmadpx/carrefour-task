import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import logo from '../assets/logo.svg';
import searchIcon from '../assets/search.svg';
import { COLORS } from '../constatns';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 69px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;

  @media (max-width: 450px) {
    justify-content: space-around;
  }
`;
const Logo = styled.div`
  margin-top: 33px;
  width: 218px;
  height: 54px;

  img {
    width: 100%;
    height: 100%;
  }
`;
const Search = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 4px;
  background-color: ${COLORS.secondary};
  display: flex;
  align-items: center;
  padding-right: 15px;
  cursor: pointer;
  flex-direction: row-reverse;
  max-width: 47px;
  overflow: hidden;
  transition: max-width 0.5s;

  ${({ openSearch }) =>
    openSearch &&
    css`
      max-width: 250px;
    `};

  img {
    width: 17px;
    height: 17px;
    margin-left: 15px;
  }

  @media (max-width: 450px) {
    max-width: 250px;
    margin-top: 20px;
    width: 218px;
  }
`;
const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  background: transparent;
  padding-left: 15px;
  font-size: 14px;
  color: black;
  font-weight: 400;
`;

function Header({ query, onSearch }) {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (!query || !query.length) {
          setOpenSearch(false);
        }
      }}
    >
      <Wrapper>
        <Logo>
          <img src={logo} alt="Carrefour" />
        </Logo>

        <Search openSearch={openSearch} onClick={() => setOpenSearch(true)}>
          <div>
            <img src={searchIcon} alt="search" />
          </div>
          <Input type={'text'} value={query} onChange={onSearch} />
        </Search>
      </Wrapper>
    </OutsideClickHandler>
  );
}

export default Header;
