import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/scss/style.scss'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeTemplate from './Templates/HomeTemplate';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/Profile/Profile'

import { Provider } from 'react-redux'
import { store } from './redux/configStore';

import List from './pages/List/List';
import UserTemplate from './Templates/UserTemplate';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path='detail'>
            <Route path=':id' element={<Detail />}></Route>
          </Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='list' element={<List />}></Route>
          <Route path='aaa' element={<Profile />}></Route>
          <Route path='*' element={<Navigate to="" />}></Route>
        </Route>
        <Route path='user' element={<UserTemplate />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path='*' element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);


