import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './Assets/scss/style.scss'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeTemplate from './Templates/HomeTemplate';
=======
import './assets/scss/style.scss';
import type {
  BrowserHistory,
  HashHistory,
  MemoryHistory
} from 'history'
import {
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import HomeTemplate from './templates/HomeTemplate';
>>>>>>> 4393e123417172471a36aa08ca94b21277722eaa
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/Profile/Profile'

import { Provider } from 'react-redux'
import { store } from './redux/configStore';

import List from './pages/List/List';
<<<<<<< HEAD
import UserTemplate from './Templates/UserTemplate';

=======
import UserTemplate from './templates/UserTemplate';
import { createBrowserHistory } from "history";
export const history: any = createBrowserHistory();
>>>>>>> 4393e123417172471a36aa08ca94b21277722eaa

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
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
          <Route path='profile' element={<Profile />}></Route>
          <Route path='*' element={<Navigate to="" />}></Route>
        </Route>
        <Route path='user' element={<UserTemplate />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path='*' element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);


