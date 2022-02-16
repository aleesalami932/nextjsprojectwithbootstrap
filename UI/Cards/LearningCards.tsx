import React from "react";
import { LearningMethode } from "../../context/Interfaces";

const Card = (props: LearningMethode) => {
  return (
    <div className="card bg-dark text-light">
      <div className="card-body text-center">
        <div className="h1 mb-3">
          <i className={props.methodeImg}></i>
        </div>
        <div className="card-title mb-3">{props.methodeName}</div>
        <p className="card-text mb-3">{props.methodeDescription}</p>
        <a href={`posts/${props.methodeId}`} className="btn btn-primary mb-3">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
