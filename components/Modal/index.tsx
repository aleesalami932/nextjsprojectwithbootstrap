import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface Modalprops {
  show: boolean;
  handleClose: () => void;
}

const Modall: React.FC<Modalprops> = ({ show, handleClose, children }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enrollment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">Fill out this form and we will get back to you</p>
        <form action="">
          <div className="mb-3">
            <label htmlFor="first-name" className="col-form-lable">
              First Name:{" "}
            </label>
            <input type="text" className="form-control" id="first-name" />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="col-form-lable">
              Last Name:{" "}
            </label>
            <input type="text" className="form-control" id="last-name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="col-form-lable">
              Email:{" "}
            </label>
            <input type="text" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="col-form-lable">
              Phone:{" "}
            </label>
            <input type="text" className="form-control" id="phone" />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modall;
