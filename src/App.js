import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Pages/Main";
import TodoList from "./Pages/TodoList";
import YesterdayList from "./Pages/YesterdayList";
import Calendar from "./Pages/Calendar";
import ACNH from "./Pages/ACNH";
import Editor from "./Pages/Editor";

import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/yesterdaylist" element={<YesterdayList />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/acnh" element={<ACNH />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

/* 
  App.js 구현 목표 체크리스트
  1. Global Style 적용 *
  2. Route path 연결  *
  2-1. 이스터 에그 추가하기
  3. Semantic tag 사용 * 
  4. (Advanced) 로컬 스토리지 활용하기 
*/
