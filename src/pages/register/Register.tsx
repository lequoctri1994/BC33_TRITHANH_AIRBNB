import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function Register({ }: Props) {
  return (
    <div className='register-page rounded'>
      <div className="container">
        <div className="row">
          <div className="signup-content col-6">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name"><i className="fa-regular fa-user"></i></label>
                  <input type="text" name="name" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><i className="fa-regular fa-envelope"></i></label>
                  <input type="email" name="email" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="pass"><i className="fa-solid fa-lock"></i></label>
                  <input type="password" name="pass" id="pass" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="re-pass"><i className="fa-solid fa-lock"></i></label>
                  <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                </div>
                <div className="check-item">
                  <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                  <label htmlFor="agree-term" className="label-agree-term"><span><span /></span>I agree all statements in <a href="#" className="term-service">Terms of service</a></label>
                </div>
                <div className="button text-center">
                  <button type="submit" className="btn-register" >Đăng Ký</button>
                  <span>Bạn đã có tài khoản?</span><NavLink to='/user/login'>Đăng nhập ở đây</NavLink>
                </div>
              </form>
            </div>
          </div>
          <div className="signup-image col-6">
            <figure>
              <img src="../img/signup/signup-image.jpg" alt="sing up image" />
            </figure>
            <NavLink to="" className="signup-image-link">I am already member</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}