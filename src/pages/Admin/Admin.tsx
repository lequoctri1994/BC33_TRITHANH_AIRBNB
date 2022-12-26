import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Input, Button, Space } from 'antd';

type Props = {}

export default function Admin({ }: Props) {
  const { Header, Sider, Content } = Layout;
  const { Search } = Input;

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
              <th>Mã Phòng</th>
              <th>Tên Phòng</th>
              <th>Hình Ảnh</th>
              <th>Location</th>
              <th>Guest Max</th>
              <th></th>
            </tr>
            <tr>
              <td>1</td>
              <td>Vip</td>
              <td><img src="https://i.pravatar.cc" alt="..." width={50} height={50} /></td>
              <td>Thành Phố Hồ Chí Minh</td>
              <td>2</td>
              <td>
                <Button className='me-3 p-1' type="primary" ghost>
                  Xem Thêm Thông Tin
                </Button>
                <Button className='me-3 p-1'>Sửa</Button>
                <Button className='p-1' type="primary" danger ghost>
                  Xóa
                </Button>
              </td>
            </tr>
          </table>
        </Content>
      </Layout>
    </Layout>
  );
};
