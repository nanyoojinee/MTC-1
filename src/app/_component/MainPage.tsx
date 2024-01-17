import React from 'react';
import Header from './_main/Header';
import Banner from './_main/Banner';
import ContentBox from './_main/ContentBox';
import InputBox from './_main/InputBox';

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ContentBox />
      <InputBox />
    </div>
  );
};

export default MainPage;
