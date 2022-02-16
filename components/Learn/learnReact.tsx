import React from "react";
import react from "../../public/images/react.svg";
import Image from "next/image";
const LearnReact = () => {
  return (
    <section className="p-5 bg-dark text-light">
      <div className="container">
        <div className="row align-items-center justify-content-between g-2">
          <div className="col-md p-5">
            <div className="container ">
              <h2 className="text-start">Learn The Fundementals</h2>
              <p className="lead text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, error et! Quaerat quia tenetur laudantium.
              </p>
              <p className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                voluptate nisi quo magni explicabo voluptatum vitae, totam quos
                hic repudiandae repellat commodi error, ab eum!
              </p>
              <a href="home" className="btn btn-light mt-3 align-self-start">
                <i className="bi bi-chevron-right">Read More</i>
              </a>
            </div>
          </div>

          <div className="col-md">
            <div className="container">
              <Image
                src={react}
                alt="fundementals img"
                height={200}
                width={200}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnReact;
