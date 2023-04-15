import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TodoInsertModal from "../Components/TodoInsertModal";
import TodoItem from "../Components/TodoItem";
import useFetch from "../util/useFetch";

export const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState(null);

  const data = useFetch("http://localhost:4000/todo");

  /* 포스트 요청 */
  const addValue = (text) => {
    if (text === "") {
      return alert("입력은 필수다 구리!");
    } else {
      fetch("http://localhost:4000/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, checked: false }),
      })
        .then((data) => {
          window.location.reload();
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  };

  const isModal = () => {
    if (select) {
      setSelect(null);
    }
    setModal(!modal);
  };

  const onChangeSelect = (todo) => {
    setSelect(todo);
  };

  return (
    <TodoMain>
      <Header />
      <div className="guri">할 일을 작성해줘 구리!</div>
      {modal ? (
        <TodoInsertModal
          addValue={addValue}
          isModal={isModal}
          select={select}
        />
      ) : null}
      <div className="list">
        {data ? (
          data.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              isModal={isModal}
              onChangeSelect={onChangeSelect}
            />
          ))
        ) : (
          <div> 로딩중 </div>
        )}
      </div>
      <AddBtn onClick={isModal}>
        <i className="fa-solid fa-circle-plus"></i>
      </AddBtn>
      <Footer />
    </TodoMain>
  );
};

export default TodoList;

const AddBtn = styled.button`
  font-size: 2em;
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 50px;
  background-color: transparent;
  border: none;
  z-index: 100;
  color: #10ba00;
  top: 65px;
  right: 10px;
  cursor: pointer;
  > i {
    font-size: 1.3em;
  }
`;

const TodoMain = styled.main`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .list {
    display: flex;
    flex-direction: column;
    height: auto;
    position: fixed;
    top: 150px;
  }
  > .guri {
    position: absolute;
    top: 80px;
    font-size: 1.5em;
  }
`;

/* 
  TodoList.js 구현 목표 체크리스트
  1. 헤더 컴포넌트 불러오기 * 
  2. 푸터 컴포넌트 불러오기 *
  3. create 기능 추가 * 
  3-1. 리스트 추가할 시 모달 or 입력창 *
  4. read 기능 추가 * 
  5. update 기능 추가
  6. delete 기능 추가 *
  7. 체크박스 기능 추가 *
  7-1. 체크되었을 경우, 안되었을 경우 구분 *
  8. styled-components 적용 *
*/
