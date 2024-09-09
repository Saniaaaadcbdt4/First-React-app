import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export default function Navbar(props) {
  const handleToggleMode = () => {
    if (typeof props.toggleMode === 'function') {
      props.toggleMode();
    } else {
      console.error('toggleMode prop not a function');
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode === 'light' || props.mode === 'dark' ? props.mode : 'light'
      } bg-${props.mode === 'light' || props.mode === 'dark' ? props.mode : 'light'}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link"
              href="/"
            >
              Home
            </a>
           </li>
           
         {/*} <li className="nav-item">
            <Link
              className="nav-link"
              to="/about"
            >
              {props.aboutText}
            </Link>
          </li>*/}
        </ul>
        <div className="form-check form-switch text-dark mx-3">
          <input
            className="form-check-input"
            onClick={handleToggleMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            aria-label="Toggle mode"
          />
        </div>
        <label
          className={`form-check-label ${props.mode === 'dark' ? 'text-white' : ''}`}
          htmlFor="flexSwitchCheckDefault"
        >
          {props.modeText}
        </label>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['light', 'dark']).isRequired,
  modeText: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: 'Default Title',
};