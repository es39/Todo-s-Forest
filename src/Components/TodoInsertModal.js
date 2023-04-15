import React, { useEffect, useState } from "react";
import styled from "styled-components";
const TodoInsert = ({ addValue, isModal, select }) => {
  const [value, setValue] = useState("");

  /* 할 일 목록 수정 요청 */
  const handleEdit = () => {
    fetch(`http://localhost:4000/todo/${select.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        text: value,
        checked: select.checked,
      }),
    })
      .then(() => {
        setValue("");
        isModal();
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  // input이 변경될 때마다 실행
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addValue(value);
    setValue("");
    isModal();
  };

  useEffect(() => {
    if (select) {
      setValue(select.text);
    }
  }, [select]);

  return (
    <div>
      <InputBackground onClick={isModal}>
        <InputForm onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
          <textarea
            onClick={(event) => {
              event.stopPropagation();
            }}
            placeholder="할 일을 입력해줘 구리.."
            value={value}
            onChange={handleOnChange}
          ></textarea>
          {select ? (
            <div className="edit" onClick={handleEdit}>
              <i className="fa-solid fa-pencil"></i>
            </div>
          ) : (
            <button type="submit">추가해줘 구리!</button>
          )}
        </InputForm>
      </InputBackground>
    </div>
  );
};

export default TodoInsert;

const InputBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 900;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const InputForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  width: 320px;
  height: 320px;
  background-color: white;
  border-radius: 20px;
  border-style: none;
  box-shadow: 10px 5px 10px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > textarea {
    border: 1px solid #adeca7;
    outline: none;
    margin: 5px;
    padding: 5px;
  }
  > button {
    cursor: pointer;
    background-color: #adeca7;
    border: none;
    border-radius: 20px;
    padding: 5px;
  }
`;

/* TODO:
1. form 형태 추가 *
2. input 추가 *
3. 제출 버튼 추가 *
4. 입력 이벤트 함수 추가 *
5. styled-components 적용
*/
