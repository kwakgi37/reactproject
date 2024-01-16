//공지사항 글쓰기 화면
import './Post.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

function submitTest() {
  Axios.get('http://localhost:8000/list', {}).then(() => {
    alert('등록 완료!');
  });
}

const Post = () => {
  const placeholderText = (length: number, customPlaceholder: string) =>
    length === 2 ? customPlaceholder : 'Your placeholder';

  return (
    <div className="App">
      <h1>게시글 작성</h1>
      <div id="title">
        <h4 className="text1">제목</h4>
        <form className="title-box">
          <textarea
            rows={4}
            maxLength={20}
            className="title-txt"
            name=""
            placeholder={placeholderText('hi'.length, '제목을 입력해주세요')}
          ></textarea>
        </form>
      </div>
      <div id="author">
        <h4 className="text1">작성자</h4>
        <form className="author-box">
          <textarea
            rows={4}
            maxLength={20}
            className="author-txt"
            name=""
            placeholder={placeholderText('hi'.length, '이름을 적어주세요')}
          ></textarea>
        </form>
      </div>
      <div id="detail">
        <h4 className="text1">내용</h4>
        <form className="detail-box">
          <textarea
            rows={10}
            maxLength={1000}
            className="detail-txt"
            name=""
            placeholder={placeholderText('hi'.length, '내용을 입력해주세요')}
          ></textarea>
        </form>
      </div>
      <div className="button">
        <Link to="/">
          <Button className="button-box" variant="primary" onClick={submitTest}>
            등록하기
          </Button>
        </Link>
        <Link to="/">
          <Button className="button-box" variant="secondary">
            목록
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
