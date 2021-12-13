import React from 'react';
import ReactDOM from 'react-dom';
import '../public/style.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

ReactDOM.render(
  <div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route exact path="/" component={<Home />} />
          </Routes>
        </main>
      </div>
      <h1> Democracy Prep Schools Survey Form</h1>
    </Router>
  </div>,
  document.getElementById('app')
);
