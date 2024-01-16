//메인 화면, 안내 화면
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './BoardList.css';
import { Link } from 'react-router-dom';
import dummy from './data.json';

interface Category {
  name: string;
}

interface Record {
  number: number;
  author: string;
  title: string;
  date: string;
}

const BoardList: React.FC = () => {
  const category: Category[] = [
    { name: '공지' },
    { name: '안내' },
    { name: '이벤트' },
    { name: '기타' },
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const recordsPerPage: number = 10;
  const firstIndex: number = (currentPage - 1) * recordsPerPage;
  const lastIndex: number = firstIndex + recordsPerPage;
  const records: { words: Record[] } = {
    words: dummy.words.slice(firstIndex, lastIndex),
  };
  const npage: number = Math.ceil(dummy.words.length / recordsPerPage);
  const numbers: number[] = [...Array(npage + 1).keys()].slice(1);

  return (
    <div>
      <div>
        <h1>안내</h1>
      </div>
      <nav id="menu">
        <div>
          <Link to="/">
            <Button className="menulink" variant="white">
              공지사항
            </Button>
          </Link>
          <Link to="/guide">
            <Button className="menulink" variant="white">
              가이드
            </Button>
          </Link>
          <Link to="/qna">
            <Button className="menulink" variant="white">
              QNA
            </Button>
          </Link>
        </div>
        <div className="search">
          <form className="search-box">
            <input type="text" maxLength={20} className="search-txt" name="" />
            <input type="submit" value="검색" className="search-btn" />
          </form>
        </div>
        <div className="select-form">
          <select className="form-control">
            <option>구분 ▼</option>
            {category.map((ctr, index) => (
              <option key={index} value={ctr.name}>
                {ctr.name}
              </option>
            ))}
          </select>
        </div>
      </nav>
      <div>
        <Table striped bordered hover>
          <thead className="table-head">
            <tr>
              <th>선택</th>
              <th>번호</th>
              <th>작성자</th>
              <th>제목</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {records.words.map((word, index) => (
              <tr key={index}>
                <td className="chbox">
                  <input type="checkbox"></input>
                </td>
                <td className="chbox">{word.number}</td>
                <td className="chbox">{word.author}</td>
                <td>{word.title}</td>
                <td className="chbox">{word.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <nav id="button-area">
        <div>
          <Link to="/post">
            <Button className="btn" variant="info">
              글쓰기
            </Button>
          </Link>
          <Button className="btn" variant="secondary">
            수정하기
          </Button>
          <Button className="btn" variant="danger">
            삭제하기
          </Button>
        </div>
      </nav>
      <br />
      <div className="pagination-box">
        <Button
          className="page-item"
          onClick={prePage}
          variant="white"
          disabled={currentPage === 1}
        >
          ◀
        </Button>
        {numbers.map((n, i) => (
          <Button
            className={`page-item ${currentPage === n ? 'active' : ''}`}
            key={i}
            onClick={() => changeCPage(n)}
            variant="white"
          >
            {n}
          </Button>
        ))}
        <Button
          className="page-item"
          onClick={nextPage}
          variant="white"
          disabled={currentPage === lastIndex}
        >
          ▶
        </Button>
      </div>
    </div>
  );

  function prePage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id: number) {
    setCurrentPage(id);
  }

  function nextPage() {
    const lastPage = Math.ceil(dummy.words.length / recordsPerPage);
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default BoardList;
