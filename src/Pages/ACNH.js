import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function ACNH() {
  return (
    <main>
      <Header />
      <ImgWrapper>
        <img src="./moneyguri.png" alt="모동숲 이미지" />
      </ImgWrapper>
      <Footer />
    </main>
  );
}

const ImgWrapper = styled.div`
  width: 400px;
  height: 500px;
  > img {
    width: 100%;
    height: 100%;
  }
`;

/*
  ACNH.js 구현 목표 체크리스트
  1. 헤더 컴포넌트 불러오기 * 
  2. 푸터 컴포넌트 불러오기 * 
  3. 모여봐요 동물의 숲 기능 또는 이미지 추가 * 
*/
