import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
export const Modal = ({ modal, setModal }) => {
  const openModalHandler = () => {
    setModal(!modal);
  };

  return (
    <ModalStyle>
      <ModalBack onClick={openModalHandler}>
        <ModalView
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <ModalBtn onClick={openModalHandler}>X</ModalBtn>
          <Nav />
        </ModalView>
      </ModalBack>
    </ModalStyle>
  );
};

export default Modal;

const ModalStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;
const ModalBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.2em;
  margin-top: 5px;
  position: fixed;
`;
const ModalBack = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  background-color: white;
  width: calc(100% / 2);
  height: 100vh;
  color: black;
  border-radius: 15px;
  text-align: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
`;

/* 
TODO:
  Modal.js 구현 목표 체크리스트
  1. 모달 배경 구현 *
  2. 모달창 구현 * 
  3. 클릭 시 창이 보이도록 클릭 이벤트로 기능 구현 * 
  4. styled-components 적용 * 
*/
