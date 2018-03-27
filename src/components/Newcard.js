import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
const Newcard = props => (
  //if you need state changes use constructor 
  <wrapper>
    <div className="row">
        {props.friends.map(item => (
    
      <div className="col-md-4">
        <div className="card">
          <img  src={item.image} alt={item.name} />
            {/* <div className="card-body"> */}
              {/* <h5 className="card-title" key={item.id}>
                {item.name}
              </h5> */}
            {/* </div> */}
        </div>
      </div>
   
        ))}
     </div> 
  </wrapper>
  
);

export default Newcard;
