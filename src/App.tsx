import React, { FC, StrictMode } from 'react';
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Provider } from 'react-redux';
import store from './reducers/store';
import NavigationContainer from './pages/navigation/navigation.container';
import { Route, Routes } from "react-router-dom"
import { Home } from './pages/home';
import { LunarCalendar } from './pages/lunar-calendar';
import { Summary } from './pages/summary';
import { ContactUs } from './pages/contact-us';
import { NotFound } from './pages/not-found';

const App: FC = () => {
  
  return (
    <StrictMode>
      <Provider store={store}>
        <NavigationContainer />
        <Routes>
          <Route path="/" element={<Home />} />
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
