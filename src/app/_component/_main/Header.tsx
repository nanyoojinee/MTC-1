"use client";

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logoImage from '@/../public/selectlogo.png';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PmBox = styled.div`
  margin-right: 20px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #596570;
  }
`;

const LogoImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

const HeaderTitle = styled.h3`
  margin-right: 20px; 
  margin-left: 10px;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <LogoImage src={logoImage} alt="Logo" />
      <HeaderTitle>셀렉트스타</HeaderTitle>
      <PmBox>PM1</PmBox>
      <PmBox>PM2</PmBox>
      <PmBox>PM3</PmBox>
      <PmBox>PM4</PmBox>
    </HeaderWrapper>
  );
};

export default Header;
