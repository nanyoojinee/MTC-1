"use client";

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logoImage from '@/../public/selectNews.png';

const BannerWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  margin: 30px 0px 10px 0px;
  text-align: center;
  height: 25vh;
`;

const BannerImage = styled(Image)`
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
`;

const Banner: React.FC = () => {
  return (
    <BannerWrapper>
      <BannerImage src={logoImage} alt="Banner Image" />
    </BannerWrapper>
  );
};

export default Banner;
