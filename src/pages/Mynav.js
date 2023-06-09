import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from 'react-router-dom';

function Mynav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="myform">form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="mydata">jsondata</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="myjsform">myjsform</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="myaxios">axios api</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="mychart">charts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="rboot">react bootstrap</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="uimetrial">ui metrial</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="lazy">lazy loading</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="myprops">props</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="context">context api</Link>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Mynav