import React, {useEffect} from "react";
import SwiperCore, { Navigation } from "swiper";
import "./root.css";
import "./post.css";
import Layout from "./Layout";
import post0 from "../img/00/00.jpg";
import post1 from "../img/01/01.png";
import post2 from "../img/02/02-1.png";
import post3 from "../img/03/03-1.png";
import post4 from "../img/04/04-1.png";
import post5 from "../img/05/05-1.png";
import post6 from "../img/06/06-1.png";
import post7 from "../img/07/07-1.png";
import post8 from "../img/08/08-1.png";
import post9 from "../img/09/09-1.png";
import post10 from "../img/10/10-1.png";
import postGif1 from "../img/01/01-2.gif";
import postGif3 from "../img/03/03-2.gif"; 
import postGif4 from "../img/04/04-2.gif"; 
import postGif5 from "../img/05/05-2.gif"; 
import postGif8 from "../img/08/08-2.gif"; 
import advertise from "../img/advertise.png";
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
            <span className="title_token">잡다 REVIEW</span>
          </div>
          <p className="title">우리들의 '진짜'이야기</p>
          <div className="description">
            <div className="period">
              <div className="text">2021.08.24</div>
            </div>
            <div className="divider" />
            <div className="viewCount">
              <div className="text">100</div>
            </div>
          </div>
        </div>
        <hr className="body_divider"></hr>
        <img src={post0} alt="body1" className="post" />
        <div className="post1_gif_wrap">
          <img src={post1} alt="body1" className="post1_back" />
          <img src={postGif1} alt="body1" className="post1_gif" />
        </div>
        <img src={post2} alt="body1" className="post" />
        <Swiper
          spaceBetween={50}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
            disabledClass: "disabled_swiper_button",
          }}
          lazy
          autoplay={false}
        >
          <SwiperSlide>
            <div className="swiper_ready" key="post3">
              <img src={post3} alt="body1" className="post_slider_background" />
              <img src={postGif3} alt="body1" className="post_gif3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_ready" key="post4">
              <img src={post4} alt="body1" className="post_slider_background" />
              <img src={postGif4} alt="body1" className="post_gif4" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_ready" key="post5">
              <img src={post5} alt="body1" className="post_slider_background" />
              <img src={postGif5} alt="body1" className="post_gif4" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_ready" key="post6">
              <img src={post6} alt="body1" className="post_slider_background" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_ready" key="post7">
              <img src={post7} alt="body1" className="post_slider_background" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_ready" key="post4">
              <img src={post8} alt="body1" className="post_slider_background" />
              <img src={postGif8} alt="body1" className="post_gif4" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_ready" key="post7">
              <img src={post9} alt="body1" className="post_slider_background" />
            </div>
          </SwiperSlide>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </Swiper>
        <img src={post10} alt="body1" className="post" />
      </div>
      <img src={advertise} alt="" className="footer_img"></img>
    </Layout>
  );
}

// 해야할일
// sciMethod 상단에 라인생기는 경우