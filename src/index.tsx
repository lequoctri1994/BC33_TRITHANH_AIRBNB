import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import {
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile'

import { Provider } from 'react-redux'
import { store } from './redux/configStore';

import List from './pages/List/List';
import UserTemplate from './templates/UserTemplate';
import { createBrowserHistory } from "history";
import ResponsiveItem from './Components/ResponsiveItem/ResponsiveItem';
import Home_Mobile from './pages/Home/Home_Mobile';
import Detail_Mobile from './pages/Detail/Detail_Mobile';
import Profile_Mobile from './pages/Profile/Profile_Mobile';
import List_Mobile from './pages/List/List_Mobile';
import Register_Mobile from './pages/Register/Register_Mobile';
import Login_Mobile from './pages/Login/Login_Mobile';
export const history: any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<ResponsiveItem component={Home} mobileComponent={Home_Mobile} />}></Route>
          <Route path='detail' element={
            <ResponsiveItem
              component={Detail}
              mobileComponent={Detail_Mobile}
            />
          }>
            <Route path=':id' element={<Detail />}></Route>
          </Route>
          <Route path='login' element={
            <ResponsiveItem
              component={Login}
              mobileComponent={Login_Mobile}
            />
          }></Route>
          <Route path='register' element={
            <ResponsiveItem
              component={Register}
              mobileComponent={Register_Mobile}
            />
          }></Route>
          <Route path='list' element={
            <ResponsiveItem
              component={List}
              mobileComponent={List_Mobile}
            />
          }></Route>
          <Route path='profile' element={
            <ResponsiveItem
              component={Profile}
              mobileComponent={Profile_Mobile}
            />
          }></Route>
          <Route path='*' element={<Navigate to="" />}></Route>
        </Route>
        <Route path='user' element={<UserTemplate />}>
          <Route path="login" element={
            <ResponsiveItem
              component={Login}
              mobileComponent={Login_Mobile}
            />
          }></Route>
          <Route path="register" element={
            <ResponsiveItem
              component={Register}
              mobileComponent={Register_Mobile}
            />
          }></Route>
          <Route path='*' element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);


