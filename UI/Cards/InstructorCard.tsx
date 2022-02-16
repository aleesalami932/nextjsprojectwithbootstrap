import React from "react";
import { InstructorInfo } from "../../context/Interfaces";
import Image from "next/image";

const InstructorCard = (props: InstructorInfo) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card bg-light text-dark">
        <div className="card-body text-center">
          <Image
            priority
            width={200}
            height={200}
            src={props.instructorImg}
            alt="random img from internet"
            className="rounded-circle mb-3"
          />
          <h3 className="card-title mb-3">{props.instructorName}</h3>
          <p className="card-text mb-3">{props.instructorBio}</p>
          <a href="home">
            <i className="bi bi-twitter text-dark mx-1"></i>
          </a>
          <a href="home">
            <i className="bi bi-facebook text-dark mx-1"></i>
          </a>
          <a href="home">
            <i className="bi bi-linkedin text-dark mx-1"></i>
          </a>
          <a href="home">
            <i className="bi bi-instagram text-dark mx-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
