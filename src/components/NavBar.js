import React from 'react'
import { Link } from "react-router-dom";
import icon from '../assets/icon.png';
import './NewsItem.css';

const NavBar=() =>{
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">

          <Link><img className='icon hide' exact="true" to="/General" src={icon} alt='logo'/></Link>
        <Link className="navbar-brand" to="/General">NewsElephant</Link>

        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item" >
              <Link className="nav-link active " aria-current="page" to="/General">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/General">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">business</Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-link" to="/entertainment">entertainment</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/health">health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">technology</Link>
            </li>
          </ul>
        </div>
      </div>
      </nav >

     
    )
  }

export default NavBar