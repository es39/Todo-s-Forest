import React from "react";
import styled from "styled-components";

import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Yesterdaylist() {
  return (
    <>
      <Header />
      <Title>어제 했던 일이야 구리!</Title>
      <YesterdayList>
        <div className="content">
          <i className="fa-solid fa-square-check"></i>
          <div>아침에 간지나게 일어나자 구리!</div>
        </div>
        <div className="content">
          <i className="fa-solid fa-square-check"></i>
          <div>끝내주게 아침먹자 구리!</div>
        </div>
        <div className="content">
          <i className="fa-solid fa-square-check"></i>
          <div>귀엽게 점심먹자 구리!</div>
        </div>
        <div className="content">
          <i className="fa-solid fa-square-check"></i>
          <div>작살나게 저녁먹자 구리!</div>
        </div>
        <div className="content">
          <i className="fa-solid fa-square-check"></i>
          <div>즐겁게 꿈나라 여행가자 구리!</div>
        </div>
      </YesterdayList>
      <Footer />
    </>
  );
}

const Title = styled.div`
  position: absolute;
  top: 80px;
  font-size: 1.5em;
`;

const YesterdayList = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: 150px;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    /* width: 500px; */
    > i {
      color: #10ba00;
      font-size: 1.5em;
    }
    color: gray;
    > div {
      margin: 5px;
      font-size: 1.2em;
      text-decoration: line-through;
    }
  }
`;

/*
  YesterdayList.js 구현 목표 체크리스트
  1. 헤더 컴포넌트 불러오기 * 
  2. 푸터 컴포넌트 불러오기 * 
  3. 체크된 투두리스트 목록 보여주기 *
  4. styled-components 적용 *
*/
