import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

import GlobalStyle from '../GlobalStyle'

export default function Main() {
  return (
      <div className="Main">
        <GlobalStyle />
          <main>
            <Link to='/todolist'><img src="todolistlogo.png" alt="투두리스트 로고"/></Link>
          </main>
      </div>
  );
}

/*
  Main.js 구현 목표 체크리스트
  1. 맨 처음 화면에 필요한 아이콘 삽입 *
  2. 클릭 시 /todolist로 이동 *
*/