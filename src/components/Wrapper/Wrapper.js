import React from "react";
import  "./Wrapper.css";
import Card from "../Card"

// By extending the React.Component class, Counter inherits functionality from it
class Wrapper extends React.Component {
  
  render() {
    return (
      <wrapper>
        <div className="row">
          <div className="col-6 col-md-4">
          
            <Card />
          </div>
          
        </div>

      </wrapper>  
      
    )
  }
}



export default Wrapper;