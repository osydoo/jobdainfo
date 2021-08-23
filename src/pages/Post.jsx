import React, {useEffect} from "react";
import SwiperCore, { Navigation } from "swiper";
import "./root.css";
import "./post.css";
import Layout from "./Layout";
import post1 from "../img/post1.jpg";
import post2 from "../img/02/02-1.png";
import sciMethod from "../img/sciMethod/sciMethod.gif";
import step1 from "../img/02/02-3.gif";
// import step1 from "../img/meetMethod/step1.gif";
import step3 from "../img/03/03-2.gif";
import step6 from "../img/meetMethod/step6.gif";
import step7 from "../img/meetMethod/step7.gif";
import stepBack1 from "../img/02/02-2.png";
import stepBack2 from "../img/03/03-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from "react-router-dom";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation]);

export default function Write() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);  
  return (
    <Layout>
      <div className="post_body">
        <div className="title_wrap">
          <div className="token_wrap type2">
            <span className="title_token">잡다 NEWS</span>
          </div>
          <p className="title">우리들의 '진짜'이야기</p>
          <div className="description">
            <div className="period">
              <div className="text">2021.08.14</div>
            </div>
            <div className="divider" />
            <div className="viewCount">
              <div className="text">827</div>
            </div>
          </div>
        </div>
        <hr className="body_divider"></hr>
        <img src={post1} alt="body1" className="post1" />
        <div className="post_gif_wrap">
          <img src={sciMethod} alt="body1" className="post_gif" />
        </div>
        <img src={post2} alt="body1" className="post1" />
        <Swiper
          spaceBetween={50}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          lazy
          autoplay={false}
        >
          <SwiperSlide>
            {/* <div className="swiper_ready step1_ready">
              <img src={step1} alt="body1" className="step1" />
            </div> */}
            <div className="swiper_ready">
              <img src={stepBack1} alt="body1" className="stepBack1" />
              <img src={step1} alt="body1" className="stepGif1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="swiper_ready step2_ready">
              <img src={step3} alt="body1" className="step2" />
            </div> */}
            <div className="swiper_ready">
              <img src={stepBack2} alt="body1" className="stepBack1" />
              <img src={step3} alt="body1" className="stepGif2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_ready step2_ready">
              <img src={step3} alt="body1" className="step2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_ready step2_ready">
              <img src={step6} alt="body1" className="step2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_ready step2_ready">
              <img src={step7} alt="body1" className="step2" />
            </div>
          </SwiperSlide>
          <div class="swiper-button-next"></div>
	        <div class="swiper-button-prev"></div>
        </Swiper>
      </div>
    </Layout>
  );
}

// 해야할일
// sciMethod 상단에 라인생기는 경우