/**import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router,Route, Routes, Link} from 'react-router-dom';
import Form from './form';
import Feed from './feedback';
import FormComponent from './form';

function App() {
  return (
    <Router>
      <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Form</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/feedback">Feedback</Link>
                </li>
              </ul>
            </div>
          </div>
          </nav>
        <Routes>
          <Route path="/form" element={<FormComponent/>} />
          <Route path="/feedback" element={<Feed/>}/>
        </Routes>
      </div>
    </Router>
  );
  
  
}

export default App;
**/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormComponent from './form';
import Feed from './feedback';
import CourseDetail from './CourseDetail';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top"> {/* Added sticky-top and bg-dark */}
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/">Navbar</Link> 
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/form">Form</Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/feedback">Feedback</Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/CourseDetail">Technical Communication</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/form" element={<FormComponent />} />
          <Route path="/feedback" element={<Feed />} />
          <Route path="/CourseDetail" element={<CourseDetail />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
