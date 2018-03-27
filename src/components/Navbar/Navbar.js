import React from "react";
import  "./Navbar.css";

// By extending the React.Component class, Counter inherits functionality from it
class Navbar extends React.Component {
  
  render() {
    return (
      <nav className="navbar blah">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
      </nav>

      
    )
  }
}



export default Navbar;