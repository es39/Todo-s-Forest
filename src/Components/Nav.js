import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const Nav = () => {
  return (
    <NavLink>
      <div>
        <Link to="/todolist">오늘의 할 일 </Link>
        <Link to="/yesterdaylist">어제 했던 일 </Link>
        <Link to="/calendar">달력 보기 </Link>
        <Link to="/acnh">모동숲 </Link>
        <Link to="/editor">만든 사람</Link>
      </div>
    </NavLink>
  );
};

export default Nav;

const NavLink = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin-bottom: 10px;
  > * {
    text-decoration: none;
    margin: 20px;
    background-color: #10ba00;
  }
  /* font-family: "../Font/Asia신디나루M.ttf"; */
  > div {
    width: 100%;
    background-color: #adeca7;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > a {
      text-decoration: none;
      color: black;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

/*
  Nav.js 구현 목표 체크리스트
  1. Link to 로 연결 * 
  2. styled-components 적용 
*/
