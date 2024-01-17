"use client";

import React from 'react';
import styled from 'styled-components';

const InputBoxWrapper = styled.div`
  text-align: center;
`;

const CopyrightText = styled.p`
  font-size: 12px;
  color: #888;
  margin-top: 20px;
  margin-bottom: 20px;

`;

const InputBox: React.FC = () => {
  return (
    <InputBoxWrapper>
      <CopyrightText>
        SELECTSTAR Inc. © All rights reserved
        <br />
        <br />
        셀렉트스타 주식회사 사업자 등록번호 : 626-87-01194 | 개발 PM : 이봉욱, 정유진
      </CopyrightText>
    </InputBoxWrapper>
  );
};

export default InputBox;
