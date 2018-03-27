import React from "react";


const Newcard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectPlace(props.name)} 
                className={props.currentScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.name} src={props.image} />
            </a>
        </div>
    </div>
);

export default Newcard;