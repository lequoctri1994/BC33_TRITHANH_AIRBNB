import React, { useEffect, useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Input, Button, Space } from 'antd';
import { DispatchType, RootState } from '../../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';
import { delUserApi, getIdUserApi, getUserApi } from '../../redux/reducers/userManager';
import { useFormik, FormikProps } from 'formik';
import * as yup from 'yup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {}
export type EditProfile = {
  email: string,
  name: string,
  phone: string,
  birthday: string,
}
export default function Admin({ }: Props) {
  const { Header, Sider, Content } = Layout;
  const { Search } = Input;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //===========================Formik and Yup=====================================
  const dispatch: DispatchType = useDispatch();

  const { userProfile } = useSelector((state: RootState) => state.userManager);
  const { userDetail } = useSelector((state: RootState) => state.userManager);
  console.log("Kỳ vậy: ", userDetail.email)
  const frm: FormikProps<EditProfile> = useFormik<EditProfile>({
    initialValues: {
      email: userDetail.email,
      name: userDetail.name,
      phone: userDetail.phone,
      birthday: userDetail.birthday,
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Xin mời nhập vào tên !!!"),
      phone: yup
        .number()
        .typeError("Xin hãy nhập vào ký tự là số")
        .required("Xin mời nhập vào số điện thoại !!!"),
      birthday: yup.string().required("Xin mời nhập ngày tháng năm sinh !!!"),
    }),
    onSubmit: (values: EditProfile) => {
      // dispatch(updateProfileApi(userLogin.user.id, values))
    }
  });
  useEffect(() => {
    const action = getUserApi();
    dispatch(action);
  }, [])
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',

              label: 'Quản Lý Người Dùng',
            },
            {
              key: '2',

              label: 'Quản Lý Thông Tin Vị Trí',
            },
            {
              key: '3',

              label: 'Quản Lý Thông Tin Phòng',
            },
            {
              key: '4',

              label: 'Quản Lý Đặt Phòng',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Search placeholder="Nhập vào tên phòng" enterButton />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <table className='table'>
            <tr>
              <th>Mã số</th>
              <th>Hình Ảnh</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Ngày sinh</th>
              <th>Loại người dùng</th>
              <th>Thông tin</th>
            </tr>
            {userProfile.map((member: any, index: number) => {
              return <tr key={index}>
                <td>{member.id}</td>
                <td><img src="https://i.pravatar.cc" alt="..." width={50} height={50} /></td>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.birthday}</td>
                <td>{member.role}</td>
                <td>
                  <Button className='me-3 p-1' type="primary" ghost>
                    Xem Thêm Thông Tin
                  </Button>
                  <button className='me-3 p-1 border border-secondary rounded '
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      dispatch(getIdUserApi(member.id));
                    }}
                  >Sửa</button>
                  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'none' }}>
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">Chỉnh sửa thông tin</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <form>
                          <div className="modal-body">
                            <div className="form-group mb-3">
                              <label htmlFor="email">Email:</label>
                              <input type="email" name="email" id="email"
                                className="form-control"
                                value={frm.values.email} />
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="name">Tên:</label>
                              <input type="name" name="name" id="name"
                                value={frm.values.name}
                                className="form-control"
                                onChange={frm.handleChange}
                                onBlur={frm.handleBlur} />
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="phone">Số điện thoại:</label>
                              <input type="phone" name="phone" id="phone"
                                value={frm.values.phone}
                                className="form-control"
                                onChange={frm.handleChange}
                                onBlur={frm.handleBlur}
                              />
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="birthday">Ngày sinh:</label>
                              <input name="birthday" id="birthday"
                                value={frm.values.birthday}
                                className="form-control"
                                onChange={frm.handleChange}
                                onBlur={frm.handleBlur} />
                            </div>

                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn border-dark " data-bs-dismiss="modal">Hủy</button>
                            <button type="submit" className="btn border-dark">Cập nhật</button>
                            <ToastContainer
                              position="top-center"
                              autoClose={2000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="colored" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <Button className='p-1' type="primary" danger ghost
                    onClick={() => {
                      dispatch(delUserApi(member.id));
                    }}>
                    Xóa
                  </Button>
                  <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored" />
                </td>
              </tr>
            })}

          </table>
        </Content>
      </Layout>
    </Layout>
  );
};
