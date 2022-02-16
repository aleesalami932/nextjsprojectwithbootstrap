import React from "react";

const Footer = () => {
  return (
    <footer className="p-5 bg-dark text-white text-center position-relative">
      <div className="conrainer">
        <p className="lead">Copyritgh &copy; 2021 Frontend Bootcamp</p>
        <a href="home" className="position-absolute bottom-0 end-0 p-5">
          <i className="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
