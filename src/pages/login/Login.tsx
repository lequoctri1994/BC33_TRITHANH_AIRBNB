import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function Login({ }: Props) {
  return (
    <div>
      <div className='login-page '>
        <div className="container">
          <div className="row rounded">
            <div className="signin-content">
              <div className="signin-form">
                <NavLink to="/">
                  <img src='../img/logo.png' className='d-block' width="102px" height='32px' alt="" />
                </NavLink>
                <h2 className="form-title">Sign in</h2>
                <form className="register-form" id="register-form">
                  <div className="form-group">
                    <label htmlFor="account"><i className="fa-solid fa-circle-user"></i></label>
                    <input type="text" name="account" id="account" placeholder="Your Account" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass"><i className="fa-solid fa-lock"></i></label>
                    <input type="password" name="pass" id="pass" placeholder="Password" />
                  </div>
                  <div className="button">
                    <button type="submit" className="btn-register">Đăng Nhập</button>
                    <p>
                      <NavLink to='/user/register'>Bạn quên mật khẩu?</NavLink>
                    </p>
                    <span>Bạn chưa có tài khoản?</span><NavLink to='/user/register'>Đăng ký ở đây</NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}