import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card-shoe flex-center">
        <img src={props.img} />
      </div>
      <div>
        <h6 className="bold mt-3">{props.title}</h6>
        <h6 className="h7 mt-1 color-secondary">{props.subtitle}</h6>
        <h6 className="bold mt-3">R$ {props.price}</h6>
      </div>
    </>
  );
};

export default Card;
