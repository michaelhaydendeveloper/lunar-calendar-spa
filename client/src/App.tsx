import React, { FC, StrictMode, useEffect } from 'react';
import './App.scss';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './reducers/store';
import NavigationContainer from './pages/navigation/navigation.container';
import { Route, Routes } from "react-router-dom"
import { Home } from './pages/home';
import { LunarCalendar } from './pages/lunar-calendar';
import { Summary } from './pages/summary';
import { ContactUs } from './pages/contact-us';
import { NotFound } from './pages/not-found';
import { Login } from './pages/login';
import { RootState } from './reducers/root.reducer';
import { getApiInfo } from './reducers/app.slice';

const App: FC = () => {
  // const buildNo = useSelector((state: RootState) => state.app.apiBuildNo);
  // const dispatch = useDispatch();

  // useEffect(() => {
    // if (!buildNo) {
    //   setTimeout(() => {
        // dispatch(getApiInfo());
      // }, 5000);
    // }
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <StrictMode>
      <Provider store={store}>
        <NavigationContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lunar-calendar" element={<LunarCalendar />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </StrictMode>
  );
}

export default App;
