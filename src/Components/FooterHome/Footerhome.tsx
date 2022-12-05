import React from 'react'
import { NavLink } from "react-router-dom";

type Props = {}

export default function Footerhome({ }: Props) {
  return (
    <div className='footer-page border py-3 d-flex align-items-center'>
      <p>© 2022 Airbnb, Inc.</p>
      <ul>
        <li>
          <NavLink to="">
            Quyền riêng tư
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            Điều khoản
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            Sơ đồ trang web
          </NavLink>
        </li>
      </ul>
    </div>
  )
}