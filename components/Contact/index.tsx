import React from "react";
import { ContactInfo } from "../../context/Interfaces";
import Map from "./map";

const Contact = (props: ContactInfo) => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-dark text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead text-start">
              <li className="list-group-item">
                <span className="fw-bold">Main Location: </span>
                {props.mainLocation}
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Phone: </span>
                {props.enrollmentPhone}
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone: </span>
                {props.studentPhone}
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Email: </span>
                {props.enrollmentEmail}
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Email: </span>
                {props.studentEmail}
              </li>
            </ul>
          </div>
          <div className="col-md">
            <div id="map">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
