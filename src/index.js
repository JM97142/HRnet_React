import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Components
import Header from './components/Header/Header';
import Home from './pages/Homepage/Homepage';
import EmployeeList from './pages/Employee-List/Employee-list';

const contenair = document.getElementById('root');
const root = createRoot(contenair);

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/employee-list' element={<EmployeeList />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
