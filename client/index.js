import React from 'react';
import ReactDOM from 'react-dom';
import '../public/style.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Survey from './components/Survey';
import Admin from './components/Admin';

ReactDOM.render(
  <div>
    <Router>
      <div>
        <nav>
          <div id="logo">
            <a href="">
              <img
                src="https://democracyprep.org/wp-content/themes/dpps/images/header-logo@2x.png"
                width="221"
                height="48"
                alt="democracy prep"
              />
            </a>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <br />
              <Link to="/survey">Survey</Link>
              <br />
              <Link to="/admin">Admin</Link>
              <br />
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
      </div>
    </Router>
  </div>,
  document.getElementById('app')
);
