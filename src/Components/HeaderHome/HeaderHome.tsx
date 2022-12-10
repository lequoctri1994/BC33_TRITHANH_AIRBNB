import React from 'react'
import { NavLink } from "react-router-dom";

type Props = {}

export default function HeaderHome({ }: Props) {
  return (
    <div className='header-layout'>
      <div className="header-page">
        <div className="header-home">
          <NavLink to="/">
            <img src='./img/logo.png' alt="" />
          </NavLink>
        </div>
        <div className="header-center">
          <h6>Chỗ ở</h6>
          <h6>Trải nghiệm</h6>
          <h6>Trải nghiệm trực tuyến</h6>
        </div>
        <div className="header-info">
          <div className="left-info">
            <div>Cho thuê chỗ ở qua Airbnb</div>
          </div>
          <div className="center-info">
            <i className="fa fa-globe"></i>
          </div>
          <div className="right-info">
            {/* <div className="bar">
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="user">
              <i className="fa-solid fa-user"></i>
            </div> */}
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                {/* <div className="bar"> */}
                <i className="bar fa-solid fa-bars"></i>
                {/* </div> */}
                {/* <div className="user"> */}
                <i className="user fa-solid fa-user"></i>
                {/* </div> */}
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/user/register">Đăng ký</NavLink></li>
                <li><NavLink className="dropdown-item" to="/user/login">Đăng nhập</NavLink></li>
                <li><hr /></li>
                <li><NavLink className="dropdown-item" to="">Cho thuê chỗ ở qua Airbnb</NavLink></li>
                <li><NavLink className="dropdown-item" to="">Tổ chức trải nghiệm</NavLink></li>
                <li><NavLink className="dropdown-item" to="">Trợ giúp</NavLink></li>
              </ul>
            </li>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-search">
        <form>
          <div className="form-fill border row">
            <div className="location col-3">
              <h4>Địa điểm</h4>
              <div className="destination">
                <input placeholder='Tìm kiếm địa điểm' />
              </div>
            </div>
            <div className="check-in col-3">
              <h4>Nhận phòng</h4>
              <div className="date-in">
                <input type='date' placeholder='Thêm ngày' />
              </div>
            </div>
            <div className="check-out col-3">
              <h4>Trả phòng</h4>
              <div className="date-out">
                <input type='date' placeholder='Thêm ngày' />
              </div>
            </div>
            <div className="add col-3">
              <div className="guest col-7">
                <h4>Khách</h4>
                <div className="customer">
                  <input type='number' placeholder='Thêm khách' />
                </div>
              </div>
              <div className="btn col-5">
                <button className=''>
                  <i className='fa fa-search'></i> Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}