import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function Register({ }: Props) {
  return (
    <div className='register-page '>
      <div className="container">
        <div className="row rounded">
          <div className="signup-content">
            <div className="signup-form">
              <NavLink to="/">
                <img src='../img/logo.png' className='d-block' width="102px" height='32px' alt="" />
              </NavLink>
              <h2 className="form-title">Sign up</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="account"><i className="fa-solid fa-circle-user"></i></label>
                  <input type="text" name="account" id="account" placeholder="Your Account" />
                </div>
                <div className="form-group">
                  <label htmlFor="pass"><i className="fa-solid fa-lock"></i></label>
                  <input type="password" name="pass" id="pass" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="re-pass"><i className="fa-solid fa-lock"></i></label>
                  <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                </div>
                <div className="form-group">
                  <label htmlFor="name"><i className="fa-regular fa-user"></i></label>
                  <input type="text" name="name" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><i className="fa-regular fa-envelope"></i></label>
                  <input type="email" name="email" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"><i className="fa-solid fa-mobile-screen-button"></i></label>
                  <input name="phone" id="phone" placeholder="Your Phone" />
                </div>
                <div className="check-item">
                  <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                  <label htmlFor="agree-term" className="label-agree-term"><span><span /></span>I agree all statements in <a href="#" className="term-service">Terms of service</a></label>
                </div>
                <div className="button">
                  <button type="submit" className="btn-register" >Đăng Ký</button>
                  <span>Bạn đã có tài khoản?</span><NavLink to='/user/login'>Đăng nhập ở đây</NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}