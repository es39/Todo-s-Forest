import React, { useEffect, useState } from "react";
import styled from "styled-components";
export const TodoItem = ({ todo, isModal, onChangeSelect }) => {
  const { id, text, checked } = todo;
  const [isChecked, setIsChecked] = useState(checked);

  /* 삭제 요청 */
  const onRemove = (id) => {
    fetch(`http://localhost:4000/todo/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  /* 체크박스 수정 요청 */
  useEffect(() => {
    fetch(`http://localhost:4000/todo/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        checked: isChecked,
      }),
    }).catch((err) => console.log(err));
  }, [isChecked]);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Content>
      {/* 체크 여부에 따라 CSS 적용을 다르게 하기 위해 삼항연산자 사용 */}
      <div className={`content ${isChecked ? "checked" : ""}`}>
        {isChecked ? (
          <i className="fa-solid fa-square-check" onClick={handleCheck}></i>
        ) : (
          <i className="fa-regular fa-square" onClick={handleCheck}></i>
        )}
        <div
          className="text"
          onClick={() => {
            isModal();
            onChangeSelect(todo);
          }}
        >
          {text}
        </div>
        <RemoveBtn onClick={() => onRemove(id)}>
          <i className="fa-solid fa-xmark"></i>
        </RemoveBtn>
      </div>
    </Content>
  );
};

export default TodoItem;

const Content = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  cursor: pointer;
  margin: 5px;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    > i {
      font-size: 1.5em;
    }
  }
  .checked {
    color: #10ba00;
    > .text {
      text-decoration: line-through;
      color: gray;
    }
  }
  .text {
    margin: 5px;
    font-size: 1.2em;
    width: 250px;
    text-align: left;
  }
`;

const RemoveBtn = styled.button`
  background-color: #10ba00;
  margin: 5px;
`;

/* TODO:
Todolistitem.js 구현 목표 체크리스트
1. 체크박스 아이콘 삽입 * (아이콘 종류 수정필요) - 완
2. 수정 아이콘 삽입 - 클릭 시 수정으로 대체
3. 삭제 아이콘 삽입 * 
4. 아이콘 클릭 시 수정 기능
5. 아이콘 클릭 시 삭제 기능 *
6. styled-components 적용
*/
