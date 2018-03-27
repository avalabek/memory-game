import React from "react";
import Newcard from "./Newcard";

class Simple extends React.Component {
render(){
  return(
  <div className="row">
  <div className="col-md-4">
  {
             
             this.state.friends.map(friend => (
               
               <Newcard
                  name={friend.name}
                  image={friend.image}
                  selectPlace={this.selectPlace}
                  currentScore={this.state.currentScore}
                  />
             ))
            
  
}
 

</div>
  </div>

 );
 }
  }
export default Simple;