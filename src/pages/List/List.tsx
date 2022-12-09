import React from 'react'

type Props = {}

export default function List({ }: Props) {
    return (
        <div className='list-page pt-3'>
            <div className="container">
                <div className="row">
                    <div className="content col-7 mb-3">
                        <div className="tittle">
                            <p>Hơn ... chỗ ở - Từ ngày - đến ngày</p>
                            <h3>Chỗ ở tại khu vực bản đồ đã chọn</h3>
                        </div>
                        <div className="list-choose d-flex">
                            <div className="thumbnail col-4 me-3">
                                <img src="http://picsum.photos/300/200"
                                    className='w-100' alt="" />
                            </div>
                            <div className="detail col-8 p-2">
                                <div className="info">
                                    <h5>Landmark 81</h5>
                                    <p>
                                        2 khách - phòng studio - 1 giường - 1 phòng tắm <br />
                                        Wifi - Bếp - Điều hòa nhiệt độ - Máy giặt
                                    </p>
                                </div>
                                <div className="price">
                                    <p> <span>$396</span> / Tháng</p>
                                </div>
                            </div>
                        </div>
                        <div className="list-choose d-flex">
                            <div className="thumbnail col-4 me-3">
                                <img src="http://picsum.photos/300/200"
                                    className='w-100' alt="" />
                            </div>
                            <div className="detail col-8 p-2">
                                <div className="info">
                                    <h5>Landmark 81</h5>
                                    <p>
                                        2 khách - phòng studio - 1 giường - 1 phòng tắm <br />
                                        Wifi - Bếp - Điều hòa nhiệt độ - Máy giặt
                                    </p>
                                </div>
                                <div className="price">
                                    <p> <span>$396</span> / Tháng</p>
                                </div>
                            </div>
                        </div>
                        <div className="list-choose d-flex">
                            <div className="thumbnail col-4 me-3">
                                <img src="http://picsum.photos/300/200"
                                    className='w-100' alt="" />
                            </div>
                            <div className="detail col-8 p-2">
                                <div className="info">
                                    <h5>Landmark 81</h5>
                                    <p>
                                        2 khách - phòng studio - 1 giường - 1 phòng tắm <br />
                                        Wifi - Bếp - Điều hòa nhiệt độ - Máy giặt
                                    </p>
                                </div>
                                <div className="price">
                                    <p> <span>$396</span> / Tháng</p>
                                </div>
                            </div>
                        </div>
                        <div className="list-choose d-flex">
                            <div className="thumbnail col-4 me-3">
                                <img src="http://picsum.photos/300/200"
                                    className='w-100' alt="" />
                            </div>
                            <div className="detail col-8 p-2">
                                <div className="info">
                                    <h5>Landmark 81</h5>
                                    <p>
                                        2 khách - phòng studio - 1 giường - 1 phòng tắm <br />
                                        Wifi - Bếp - Điều hòa nhiệt độ - Máy giặt
                                    </p>
                                </div>
                                <div className="price">
                                    <p> <span>$396</span> / Tháng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="map col-5 d-flex">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2142592238947!2d106.7196714153342!3d10.794895461803065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sLandmark%2081!5e0!3m2!1svi!2s!4v1670486874919!5m2!1svi!2s"
                            width="600" style={{ minHeight: '88vh', border: 0 }} loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div >
    )
}