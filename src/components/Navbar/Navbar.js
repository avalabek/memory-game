import React from "react";
import  "./Navbar.css";

// By extending the React.Component class, Counter inherits functionality from it

 const Navbar = props => ( 
 
     <nav className="navbar fixed-top blah">
        <span className="navbar-brand mb-0 h1">
            {/* <h1>Travel Memory Game</h1> */}
            </span>
          <ul className="nav nav-pills nav-justified">
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span>{props.currentScore}</span> | Best Score: {props.bestScore}</li>
        </ul>
    
       </nav>

      
    );




export default Navbar;