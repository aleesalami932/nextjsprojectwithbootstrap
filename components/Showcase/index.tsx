import React, { useState } from "react";
import Image from "next/image";
import showcase from "../../public/images/showcase.svg";
import Modall from "../Modal";

const Showcase = () => {
  const [show, setShow] = useState<boolean>(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <section className="bg-dark text-light p-5 p-lg-g text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-betweem">
          <div>
            <h1>
              Become a <span className="text-warning">Web Developer</span>
            </h1>
            <p className="lead my-4">
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev role
            </p>
            <button className="btn btn-primary btn-lg" onClick={openModal}>
              Start The Enrollment
            </button>
          </div>
          <Image
            priority
            className="img-fluid w-50 d-done d-sm-block p-0"
            src={showcase}
            height={200}
            width={1000}
            layout="fixed"
            alt="showcase img"
          />
        </div>
        <Modall handleClose={closeModal} show={show} />
      </div>
    </section>
  );
};
export default Showcase;
