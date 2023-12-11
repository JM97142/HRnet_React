import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
// Components
import Header from './components/Header/Header';
import CreateEmployee from './pages/Homepage/CreateEmployee';
import EmployeeList from './pages/Employee-List/EmployeeList'

const contenair = document.getElementById('root');
const root = createRoot(contenair);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path='/employee-list' element={<EmployeeList />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
