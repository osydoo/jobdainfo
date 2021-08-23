import React from "react";
import { useHistory } from "react-router-dom";
import "./root.css";
import block1 from "../img/block1.png";
import block2 from "../img/block2.png";
import block3 from "../img/block3.png";
import block4 from "../img/block4.png";
import block5 from "../img/block5.png";
import jumbo from "../img/jumbo.png";
import navCard from "../img/navCard.png";
import pagination from "../img/pagination.png";
import Layout from "./Layout";

const blockList = [
  {
    img: block1,
    title: "잡다 REVIEW",
    explanation: "우리들의 '진짜'이야기",
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
    img: block2,
    title: "잡다 NEWS",
    explanation: '취준이 어려운 사람들이 꼭 봐야 할 영상',
    tag: "#취업 준비의 시작 #나를 사랑하자 #취뽀왕의 취업 비밀",
    type: "type8",
  },
  {
    img: block3,
    title: "썰을 잡다",
    explanation: "유퀴즈 그사람! 무스펙 취뽀왕의 15개 대기업 합격썰",
    tag: "#유퀴즈에 그 사람 #무스펙 #취뽀왕 #15개 대기업 합격",
    type: "type2",
  },
  {
    img: block4,
    title: "잡다 NEWS",
    explanation: "유퀴즈 그사람! 무스펙 취뽀왕의 15개 대기업 합격썰",
    tag: "#유퀴즈에 그 사람 #무스펙 #취뽀왕 #15개 대기업 합격",
    type: "type2",
  },
  {
    img: block5,
    title: "잡다 NEWS",
    explanation: "'소오름 돋는' 조이 스포... 8.15, 그래서 잡다 뭐한데?",
    tag: "#찐찐찐 #찐 인턴 #찐 나 # 찐 문화 # 찐 정보",
    type: "type8",
  },
];

export default function Root() {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/jobdainfo/post`);
  }

  return (
    <Layout>
      <div className="body">
        <img className="jumbo" src={jumbo} alt=""></img>
        <div className="card_wrap">
          <img className="nav_card" src={navCard} alt=""></img>
          <ul className="card_list">
            {blockList.map((value, idx) => {
              return (
                <li className="card" key={`card${idx}`} onClick={handleClick}>
                  <header className="card_thumbArea">
                    <img
                      src={value.img}
                      alt="정보카드 썸네일"
                      class="card_thumb"
                    />
                  </header>
                  <div className="card_body_wrap">
                    <div className={`token_wrap ${value.type}`}>
                      <span className="title_token">{value.title}</span>
                    </div>
                    <div className="explanation_wrap">{value.explanation}</div>
                    <div className="tag">{value.tag}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <img src={pagination} alt="" className="pagination"></img>
      </div>
    </Layout>
  );
}
