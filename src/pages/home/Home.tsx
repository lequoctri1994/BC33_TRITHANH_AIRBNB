import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

type Props = {}

export default function Home({ }: Props) {
  return (
    <div className='home-page'>
      <div className="carousel">
        <div className="introduce container">
          <h3>Hãy bắt đầu những cuộc phiêu lưu</h3>
          <h4>Cuộc đời là những chuyến đi.</h4>
          <button className='btn'>
            Trải nghiệm ngay
          </button>
        </div>
      </div>
      <div className='content'>
        <div className="container">
          <div className="menu-list">
            <div className="tittle">
              <h3>Khám phá những điểm đến gần đây</h3>
            </div>
            <div className="menu pt-5">
            </div>
          </div>
          <div className="convenient">
            <div className="tittle">
              <h3>Ở bất cứ đâu</h3>
            </div>
            <div className="row">
              <div className="item col-3">
                <div className="thumbnail">
                  <img src="/img/home.png" className='w-100' alt="" />
                </div>
                <p>Toàn bộ nhà</p>
              </div>
              <div className="item col-3">
                <div className="thumbnail">
                  <img src="/img/special.jpg" className='w-100 ' alt="" />
                </div>
                <p>Chỗ ở độc đáo</p>
              </div>
              <div className="item col-3">
                <div className="thumbnail">
                  <img src="/img/farm.jpg" className='w-100' alt="" />
                </div>
                <p>Trang trại và thiên nhiên</p>
              </div>
              <div className="item col-3">
                <div className="thumbnail">
                  <img src="/img/dog.png" className='w-100' alt="" />
                </div>
                <p>Cho phép mang theo thú cưng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}