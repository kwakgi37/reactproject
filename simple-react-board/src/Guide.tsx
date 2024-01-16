//가이드 화면
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react';
import './Guide.css';
import './BoardList.css';

const Guide = () => {
  useEffect(() => {
    const windowWithKakao: any = window;
    const container = document.getElementById('map');
    const options = {
      center: new windowWithKakao.kakao.maps.LatLng(35.8357466, 128.6824785),
      level: 3,
    };

    const map = new windowWithKakao.kakao.maps.Map(container, options);
    const markerPosition = new windowWithKakao.kakao.maps.LatLng(
      35.8357466,
      128.6824785
    );
    const marker = new windowWithKakao.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      <h1>안내</h1>
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
      </nav>
      <br />
      <div>
        <div
          className="map-box"
          id="map"
          style={{ width: '500px', height: '400px' }}
        ></div>
      </div>
      <br />
      <div>
        <h3>대구 수성구 알파시티 1로 160</h3>
      </div>
    </div>
  );
};

export default Guide;
