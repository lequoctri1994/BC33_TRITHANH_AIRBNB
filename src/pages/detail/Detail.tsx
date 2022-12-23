import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { DispatchType, RootState } from '../../redux/configStore';
import { getBookingDetailApi } from '../../redux/reducers/bookingReducer';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

type Props = {}

export default function Detail({ }: Props) {
  const { arrDetail } = useSelector((state: RootState) => state.bookingReducer);
  const dispatch: DispatchType = useDispatch();
  //Lấy param id từ url
  const params: any = useParams();
  useEffect(() => {
    const action = getBookingDetailApi(params.id);
    dispatch(action);
  }, [params.id])
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  }
  return (
    <div className='detail-page'>
      <div className="container">
        <h3 className='pt-3'>{arrDetail?.tenPhong}</h3>
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
          <img src={arrDetail?.hinhAnh} className='w-100 h-100' alt="" />
        </div>
        <div className="description">
          <div className="row">
            <div className="content col-8">
              <div className="row">
                <div className="tittle-left col-11">
                  <h3>Toàn bộ căn hộ cho thuê</h3>
                  <p>{arrDetail?.khach} khách - {arrDetail?.phongNgu} phòng ngủ - {arrDetail?.giuong} giường - {arrDetail?.phongTam} phòng tắm</p>
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
                      <h4>Chủ nhà siêu cấp</h4>
                      {arrDetail?.moTa}
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
                <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt=""
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
                    {arrDetail?.bep
                      ? (<div className="item d-flex align-items-center">
                        <div className="col-1">
                          <i className="fa-solid fa-utensils"></i>
                        </div>
                        <div className="col-11">
                          <span>Bếp</span>
                        </div>
                      </div>)
                      : ""}
                    {arrDetail?.banLa
                      ? (<div className="item d-flex align-items-center">
                        <div className="col-1">
                          <i className="fa-solid fa-house-laptop"></i>
                        </div>
                        <div className="col-11">
                          <span>Bàn làm việc</span>
                        </div>
                      </div>)
                      : ""}
                    {arrDetail?.banUi
                      ? (<div className="item d-flex align-items-center">
                        <div className="col-1">
                          <i className="fa-solid fa-shirt"></i>
                        </div>
                        <div className="col-11">
                          <span>Bàn ủi</span>
                        </div>
                      </div>)
                      : ""}
                    {arrDetail?.dieuHoa
                      ? (<div className="item d-flex align-items-center">
                        <div className="col-1">
                          <i className="fa-solid fa-fan"></i>
                        </div>
                        <div className="col-11">
                          <span>Điều hòa nhiệt độ</span>
                        </div>
                      </div>)
                      : ""}
                    {arrDetail?.doXe
                      ? (<div className="item d-flex align-items-center">
                        <div className="col-1">
                          <i className="fa-solid fa-car"></i>
                        </div>
                        <div className="col-11">
                          <span>Bãi đỗ xe</span>
                        </div>
                      </div>)
                      : ""}
                    {arrDetail?.hoBoi
                      ? (<div className="item d-flex align-items-center">
                        <div className="col-1">
                          <i className="fa-solid fa-person-swimming"></i>
                        </div>
                        <div className="col-11">
                          <span>Hồ bơi</span>
                        </div>
                      </div>)
                      : ""}
                    {arrDetail?.mayGiat
                      ? (<div className="item d-flex align-items-center">
                        <div className="col-1">
                          <i className="fa-solid fa-socks"></i>
                        </div>
                        <div className="col-11">
                          <span>Máy giặt</span>
                        </div>
                      </div>)
                      : ""}
                    {arrDetail?.tivi
                      ? (<div className="item d-flex align-items-center">
                        <div className="col-1">
                          <i className="fa-solid fa-tv"></i>
                        </div>
                        <div className="col-11">
                          <span>Ti-vi</span>
                        </div>
                      </div>)
                      : ""}
                    {arrDetail?.wifi
                      ? (<div className="item d-flex align-items-center">
                        <div className="col-1">
                          <i className="fa-solid fa-wifi"></i>
                        </div>
                        <div className="col-11">
                          <span>Wifi</span>
                        </div>
                      </div>)
                      : ""}
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
              <form>
                <div className="check p-4">
                  <div className="cost">
                    <p> <span className='fw-bold'>${arrDetail?.giaTien}</span>/đêm</p>
                  </div>
                  <div className="row">
                    <div className="calendar p-2 text-center ">
                      <div className="check">
                        <div className="check-in w-50 me-3">
                          <p>
                            <i className="fa-regular fa-calendar-days"></i> Nhận phòng</p>
                        </div>
                        <div className="check-out  w-50">
                          <p><i className="fa-regular fa-calendar-days"></i> Trả phòng</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-guest w-100 text-center mt-2 p-2">
                    <p>Khách</p>
                    <input className='w-20'
                      type="number"
                      id='guest'
                      name='guest' />
                  </div>
                  <div className='button my-3'>
                    <button className='btn border' type='submit'>
                      Đặt phòng
                    </button>
                  </div>
                  <div className='notification text-center'>
                    <p>Bạn vẫn chưa bị trừ tiền</p>
                  </div>
                  <div className="check-payment border-bottom">
                    <div className="cost-amount d-flex justify-content-between">
                      <div className="cost-date text-decoration-underline">
                        <p>${arrDetail?.giaTien} / đêm
                        </p>
                      </div>
                      <div className="bill">
                        <p>
                          ${arrDetail?.giaTien}
                        </p>
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
                      {arrDetail?.giaTien}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}