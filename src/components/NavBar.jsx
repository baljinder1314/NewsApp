import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark sticky-top">
          <div className="container-fluid">

          






            <Link className="navbar-brand text-white" to="/">NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-white " aria-current="page" to="/world">Home</Link>
                </li>

                  <li className="nav-item "><Link className="nav-link text-white" to="/business">Business</Link></li>
                  <li className="nav-item "><Link className="nav-link text-white" to="/crime">Crime</Link></li>
                  <li className="nav-item "><Link className="nav-link text-white" to="/education">Education</Link></li>
                  <li className="nav-item "><Link className="nav-link text-white" to="/entertainment">Entertainment</Link></li>
                  <li className="nav-item "><Link className="nav-link text-white" to="/environment">Environment</Link></li>
                  <li className="nav-item "><Link className="nav-link text-white" to="/food">Food</Link></li>
                  <li className="nav-item "><Link className="nav-link text-white" to="/health">Health</Link></li>
                  <li className="nav-item "><Link className="nav-link text-white" to="/lifestyle">Lifestyle</Link></li>
                  <li className="nav-item "><Link className="nav-link text-white" to="/other">Other</Link></li>
                  <li className="nav-item "><Link className="nav-link text-white" to="/politics">Politics</Link></li>
                  <li className="nav-item "><Link className="nav-link text-white" to="/science">Science</Link></li>
                  <li className="nav-item "><Link className="nav-link text-white" to="/sports">Sports</Link></li>
                  <li className="nav-item "><Link className="nav-link text-white" to="/technology">Technology</Link></li>
                  <li className="nav-item "><Link className="nav-link text-white" to="/tourism">Tourism</Link></li>
              </ul>


              
            </div>


            
         
          </div>

       
        </nav>
    )
  }
}

export default NavBar;
