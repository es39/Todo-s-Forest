import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export const Calendar = () => {
  return (
    <main>
      <Header />
      <ImgWrapper>
        <img src="loading.png" alt="준비중이야 구리" />
      </ImgWrapper>
      <Footer />
    </main>
  );
};

export default Calendar;

const ImgWrapper = styled.div`
  width: 400px;
  height: 500px;
  > img {
    width: 100%;
    height: 100%;
  }
`;

/*
  Calendar.js 구현 목표 체크리스트
  1. 헤더 컴포넌트 불러오기 * 
  2. 푸터 컴포넌트 불러오기 * 
  3. 준비중입니다... 이미지 * 
*/
