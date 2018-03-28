import React from "react";
import Newcard from "./Newcard";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
const Row = props => (
  //if you need state changes use constructor 
  <wrapper>
    <div className="row">
     
        {/* {props.friends.map(item => (
            <Newcard
                  name={friend.name}
                  image={friend.image}
                  selectPlace={this.selectPlace}
                  currentScore={this.state.currentScore}
                  />
       */}
        {/* ))} */}
     </div> 
  </wrapper>
  
);

export default Row;
