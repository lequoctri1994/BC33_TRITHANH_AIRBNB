import React from 'react'
import { NavLink } from "react-router-dom";

type Props = {}

export default function HeaderHome({ }: Props) {
  return (
    <div className='header-page border-bottom bg-white'>
      <div className="header-home">
        <NavLink to="/">
          <img src='./img/logo.png' alt="" />
        </NavLink>
      </div>
      <div className="header-search">
        <div className="left-search">
          <div>Địa điểm bất kỳ</div>
        </div>
        <div className="center-search">
          <div>Tuần bất kỳ</div>
        </div>
        <div className="right-search">
          <div className='add-search'>Thêm khách</div>
          <div className='icon-search'>
            <i className='fa fa-search'></i>
          </div>
        </div>
      </div>
      <div className="header-info">
        <div className="left-info">
          <div>Cho thuê chỗ ở qua Airbnb</div>
        </div>
        <div className="center-info">
          <i className="fa fa-globe"></i>
        </div>
        <div className="right-info">
          <div className="bar">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="user">
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}