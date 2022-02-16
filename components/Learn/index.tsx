import React from "react";
import fundamentals from "../../public/images/fundamentals.svg";
import Image from "next/image";

const Learn = () => {
  return (
    <section className="p-5" id="learn">
      <div className="container">
        <div className="row align-items-center justify-content-between g-2">
          <div className="col-md">
            <div className="container">
              <Image
                priority
                width={200}
                height={200}
                src={fundamentals}
                alt="fundementals img"
                className="img-fluid"
              />
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
};

export default Learn;
