import React from "react";
import styled from "styled-components";
export const Footer = () => {
  return <FooterStyle>@ 2023 Sunny Day</FooterStyle>;
};

export default Footer;

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

/*
  Footer.js 구현 목표 체크리스트
  1. styled-components 적용 * 
  2. 문구 넣기 * 
*/
