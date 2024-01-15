import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoardList from 'BoardList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Post from 'Post';
import Guide from 'Guide';
import Qna from 'Qna';
import Qnapost from 'Qnapost';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/post" element={<Post />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/qna" element={<Qna />} />
          <Route path="/qna/qnapost" element={<Qnapost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
