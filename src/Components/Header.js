import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

export const Header = () => {
  const [modal, setModal] = useState(false);
  const openModalHandler = () => {
    setModal(!modal);
  };

  return (
    <HeaderStyle>
      <ImgWrapper>
        <img src="logo2.png" alt="동물의 숲 나뭇잎 로고" />
      </ImgWrapper>
      <ModalBtn onClick={openModalHandler}>
        <i className="fa-solid fa-bars"></i>
      </ModalBtn>
      {modal === true ? <Modal modal={modal} setModal={setModal} /> : null}
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.4);
`;
const ModalBtn = styled.button`
  border: none;
  background-color: transparent;
  position: fixed;
  right: 0;
  margin-right: 30px;
  > i {
    font-size: 1.5em;
    cursor: pointer;
  }
`;
const ImgWrapper = styled.div`
  width: 30px;
  height: 40px;
  display: flex;
  position: fixed;
  left: 0;
  margin-left: 20px;
  > i {
    cursor: pointer;
  }
`;

/* 
  Header.js 구현 목표 체크리스트
  1. 메뉴바 아이콘 삽입 * 
  2. 메뉴바 아이콘 클릭 시 모달창 화면이 보이도록 구현 * 
  3. 나뭇잎 이미지 삽입 * 
  4. 나뭇잎 이미지 클릭 시 이스터 에그 화면으로 이동 
  5. styled-components 적용  
*/
