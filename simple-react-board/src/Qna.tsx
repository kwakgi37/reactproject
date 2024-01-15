import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './BoardList.css';
import { Link } from 'react-router-dom';
import dummy from './data2.json';

const Qna = () => {
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
            {dummy.words.map((word) => (
              <tr>
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
          <Link to="/qna/qnapost">
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
    </div>
  );
};

export default Qna;
