import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Editor() {
  return (
    <main>
      <Header />
      <Introduction>
        <ImgWrapper>
          <img src="eunseon.png" alt="editor photo" />
        </ImgWrapper>
        <h2>Jo Eun Seon</h2>
        <h3>소통하는 개발자</h3>
        <div>
          <i className="fa-brands fa-instagram"></i> :
          https://www.instagram.com/es.__.39/
        </div>
        <div>
          <i className="fa-brands fa-github"></i> : https://github.com/es39
        </div>
      </Introduction>
      <Footer />
    </main>
  );
}

const Introduction = styled.div`
  > h3 {
    margin: 20px;
  }
  > div {
    margin: 20px;
  }
  background-color: #adeca7;
  padding: 20px;
  border-radius: 30px;
`;

const ImgWrapper = styled.div`
  > img {
    width: 300px;
    height: 300px;
  }
`;

/*
  Editor.js 구현 목표 체크리스트
  1. 헤더 컴포넌트 불러오기 * 
  2. 푸터 컴포넌트 불러오기 * 
  3. 깃허브, 인스타그램, 블로그 링크 삽입 * 
*/
