import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function Detail({ }: Props) {
  return (
    <div className='detail-page'>
      <div className="container">
        <h3 className='pt-3'>Amazing View in Landmark 81</h3>
        <div className="title">
          <div className="info">
            <ul>
              <li>
                <p><i className='fa fa-star'></i>5,0
                  <span
                    className='underline'>(20 đánh giá)
                  </span></p>
              </li>
              <li>
                <i className="fa-solid fa-house-user"></i>
                <span>Chủ nhà siêu cấp</span>
              </li>
              <li className='underline'>
                Bình Thạnh, Hồ Chí Minh, Việt Nam
              </li>
            </ul>
          </div>
          <div className="share">
            <ul>
              <li className='underline'>
                <i className='fa fa-share'></i>
                <span>Chia sẻ</span>
              </li>
              <li>
                <i className='fa fa-heart'></i>
                <span>Lưu</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <div className="row">
            <div className="item item-1">
              <img src="../img/detail/pic1.jpg" alt="" />
            </div>
            <div className="item">
              <img src="../img/detail/pic2.jpg" alt="" />
            </div>
            <div className="item">
              <img src="../img/detail/pic3.jpg" alt="" />
            </div>
            <div className="item">
              <img src="../img/detail/pic4.jpg" alt="" />
            </div>
            <div className="item">
              <img src="../img/detail/pic5.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="description">
          <div className="row">
            <div className="content col-8">
              <div className="row">
                <div className="tittle-left col-11">
                  <h3>Toàn bộ căn hộ cho thuê - Chủ nhà Chip</h3>
                  <p>4 khách - 2 phòng ngủ - 2 giường - 2 phòng tắm</p>
                </div>
                <div className="title-right col-1">
                  <img src="http://picsum.photos/50/50" className='w-100 rounded-circle' alt="" />
                </div>
              </div>
              <div className="service col-12 border-top border-bottom py-3">
                <div className="row">
                  <div className="item d-flex pb-2">
                    <div className="col-1">
                      <i className='fa fa-home'></i>
                    </div>
                    <div className="col-11">
                      <h4>Toàn bộ nhà</h4>
                      <p>Bạn sẽ có chung cư cao cấp cho riêng mình</p>
                    </div>
                  </div>
                  <div className="item d-flex pb-2">
                    <div className="col-1">
                      <i className="fa-solid fa-hand-sparkles"></i>
                    </div>
                    <div className="col-11">
                      <h4>Vệ sinh tăng cường</h4>
                      <p>Chủ nhà này đã cảm kết thực hiện quy trình vệ sinh tăng cường 5 bước của Airbnb <NavLink to=''>Hiển thị thêm</NavLink>
                      </p>
                    </div>
                  </div>
                  <div className="item d-flex pb-2">
                    <div className="col-1">
                      <i className="fa-solid fa-house-user"></i>
                    </div>
                    <div className="col-11">
                      <h4>Chip là chủ nhà siêu cấp</h4>
                      <p>
                        Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách
                      </p>
                    </div>
                  </div>
                  <div className="item d-flex pb-2">
                    <div className="col-1">
                      <i className="fa-regular fa-calendar-days"></i>
                    </div>
                    <div className="col-11">
                      <h4>Miễn phí trong 48 giờ</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="authority py-3">
                <img src="../img/detail/aircover.jpg" alt=""
                  width={125} height={26}
                />
                <p className='pt-3'>
                  Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà hủy, thông tin nhà/phòng cho thuê không chính xác và những vấn đề khác như sự cố trong quá trình nhận phòng.
                </p>
                <NavLink to=''>
                  Tìm hiểu thêm
                </NavLink>
              </div>
              <div className="facility py-3 border-top w-100">
                <h4>Nơi này có những gì cho bạn</h4>
                <div className="row">
                  <div className="col-6">
                    <div className="item d-flex align-items-center">
                      <div className="col-1">
                        <i className="fa-solid fa-utensils"></i>
                      </div>
                      <div className="col-11">
                        <span>Bếp</span>
                      </div>
                    </div>
                    <div className="item d-flex align-items-center">
                      <div className="col-1">
                        <i className="fa-solid fa-house-laptop"></i>
                      </div>
                      <div className="col-11">
                        <span>Không gian riêng để làm việc</span>
                      </div>
                    </div>
                    <div className="item d-flex align-items-center">
                      <div className="col-1">
                        <i className="fa-solid fa-shower"></i>
                      </div>
                      <div className="col-11">
                        <span>Bồn tắm nước nóng</span>
                      </div>
                    </div>
                    <div className="item d-flex align-items-center">
                      <div className="col-1">
                        <i className="fa-solid fa-elevator"></i>
                      </div>
                      <div className="col-11">
                        <span>Thang máy</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="item d-flex align-items-center">
                      <div className="col-1">
                        <i className="fa-solid fa-wifi"></i>
                      </div>
                      <div className="col-11">
                        <span>Wifi</span>
                      </div>
                    </div>
                    <div className="item d-flex align-items-center">
                      <div className="col-1">
                        <i className="fa-solid fa-tv"></i>
                      </div>
                      <div className="col-11">
                        <span>TV</span>
                      </div>
                    </div>
                    <div className="item d-flex align-items-center">
                      <div className="col-1">
                        <i className="fa-solid fa-shirt"></i>
                      </div>
                      <div className="col-11">
                        <span>Máy giặt</span>
                      </div>
                    </div>
                    <div className="item d-flex align-items-center">
                      <div className="col-1">
                        <i className="fa-solid fa-person-swimming"></i>
                      </div>
                      <div className="col-11">
                        <span>Bể bơi</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="show-more pt-3">
                  <button className='btn'>
                    Hiển thị tất cả 29 tiện nghi
                  </button>
                </div>
              </div>
            </div>
            <div className="payment col-4">
              <div className="check p-4">
                <div className="cost">
                  <p> <span className='fw-bold'>$59</span>/đêm</p>
                </div>
                <div className="row">
                  <div className="check-in p-3 col-6">
                    <p>Nhận phòng</p>
                    <input type="date" />
                  </div>
                  <div className="check-out p-3 col-6">
                    <p>Trả phòng</p>
                    <input type="date" />
                  </div>
                  <div className="add-guest col-12 p-3">
                    <p>Khách</p>
                    <input className='w-50' type="number" value={1} />
                  </div>

                  <div className='button my-3'>
                    <button className='btn border'>
                      Đặt phòng
                    </button>
                  </div>
                  <div className='notification text-center'>
                    <p>Bạn vẫn chưa bị trừ tiền</p>
                  </div>
                  <div className="check-payment border-bottom">
                    <div className="cost-amount d-flex justify-content-between">
                      <div className="cost-date text-decoration-underline">
                        <p>$59 x 5 đêm</p>
                      </div>
                      <div className="bill">
                        $295
                      </div>
                    </div>
                    <div className="service-cost d-flex justify-content-between">
                      <div className="service text-decoration-underline">
                        <p>Phí dịch vụ</p>
                      </div>
                      <div className="cost">
                        $31
                      </div>
                    </div>
                  </div>
                  <div className="total d-flex justify-content-between py-3">
                    <div className="detail">
                      <p>Tổng</p>
                    </div>
                    <div className="in-total">
                      $326
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}