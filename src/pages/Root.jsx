import React from "react";
import "./root.css";
import block1 from "../img/block1.png";
import block2 from "../img/block2.png";
import block3 from "../img/block3.png";

    const blockList = [
      {
        img: block1,
        title: "잡다 NEWS",
        explanation: "815 취준 광복 선언! 취준생이여 잡다로 다 모여라 😊",
        tag: "#우리는 역량 #기업은 문화 #모두 다 모여",
        type: "type8",
      },
      {
        img: block2,
        title: "잡다 NEWS",
        explanation: '나와 최고 궁합 기업에 입사!   無스펙 "인턴잡다 프로젝트"',
        tag: "#무스펙 #역검만 #최고 궁합 기업/직군 추천",
        type: "type8",
      },
      {
        img: block3,
        title: "썰을 잡다",
        explanation: "취준이 어려운 사람들이 꼭 봐야 할 영상",
        tag: "#취업 준비의 시작 #나를 사랑하자 #취뽀왕의 취업 비밀",
        type: "type2",
      },
      {
        img: block1,
        title: "잡다 NEWS",
        explanation: "815 취준 광복 선언! 취준생이여 잡다로 다 모여라 😊",
        tag: "#우리는 역량 #기업은 문화 #모두 다 모여",
        type: "type8",
      },
      {
        img: block1,
        title: "잡다 NEWS",
        explanation: "815 취준 광복 선언! 취준생이여 잡다로 다 모여라 😊",
        tag: "#우리는 역량 #기업은 문화 #모두 다 모여",
        type: "type8",
      },
      {
        img: block1,
        title: "잡다 NEWS",
        explanation: "815 취준 광복 선언! 취준생이여 잡다로 다 모여라 😊",
        tag: "#우리는 역량 #기업은 문화 #모두 다 모여",
        type: "type8",
      },
    ];

export default function Root() {

  return (
    <div className="root">
      <div className="banner">
      </div>
      <ul className="blockList">
        {blockList.map((value, idx) => {
          return (
            <li className="block">
              <a className="infoCard_link__3fMhW" role="button" href="/info/19">
                <header className="infoCard_thumbArea__2ugWA">
                  <img
                    src={value.img}
                    alt="정보카드 썸네일"
                    class="infoCard_thumb__26Of1"
                  />
                </header>
                <div className="body_wrap">
                  <div className={`tokenWrap ${value.type}`}>
                    <span className="title_token">{value.title}</span>
                  </div>
                  <div className="explanation_wrap">{value.explanation}</div>
                  <div className="tag">{value.tag}</div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
