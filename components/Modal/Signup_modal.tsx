import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
interface Modalprops {
  show: boolean;
  handleClose?: () => void;
  createAccount?: () => void;
}

const Signup_Modal: React.FC<Modalprops> = ({
  show,
  handleClose,
  children,
}) => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const firstRef = useRef<HTMLInputElement | null>(null);
  const lastRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const [emailIsvalid, setEmailIsvalid] = useState<boolean>(true);
  const [passIsValid, setPassIsValid] = useState<boolean>(true);
  const [phoneIsValid, setPhoneIsValid] = useState<boolean>(true);
  const [firstIsValid, setFirstIsValid] = useState<boolean>(true);
  const [lastIsValid, setLastIsValid] = useState<boolean>(true);
  const [formIsvalid, setFormIsvalid] = useState<boolean>(false);

  let classDanger: string = "form-control";

  const createAccount = async () => {
    if (emailRef !== null && passRef !== null) {
      const loginEmail = emailRef.current!.value;
      const password = passRef.current!.value;
      const firstName = firstRef.current!.value;
      const lastName = lastRef.current!.value;
      const phone = phoneRef.current!.value;

      if (firstName.length < 2) {
        setFirstIsValid(false);
      } else {
        setFirstIsValid(true);
      }
      if (lastName.length < 2) {
        setLastIsValid(false);
      } else {
        setLastIsValid(true);
      }
      if (phone.length < 8) {
        setPhoneIsValid(false);
      } else {
        setPhoneIsValid(true);
      }
      if (!loginEmail.match(mailFormat)) {
        setEmailIsvalid(false);
      } else {
        setEmailIsvalid(true);
      }
      if (!password.match(passFormat)) {
        setPassIsValid(false);
      } else {
        setPassIsValid(true);
      }
      if (
        lastIsValid &&
        firstIsValid &&
        phoneIsValid &&
        passIsValid &&
        emailIsvalid
      ) {
        setFormIsvalid(true);
        classDanger = "form-control border border-danger";
        console.log(formIsvalid, classDanger);
      } else {
        setFormIsvalid(false);
        console.log(formIsvalid, classDanger);
      }
      if (formIsvalid) {
        console.log(formIsvalid);
        createUserWithEmailAndPassword(auth, loginEmail, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            router.push("/");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
          });
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">Fill out this form to signup</p>
        <form action="" className=" needs-validation">
          <div className="mb-3">
            <label htmlFor="first-name" className="col-form-lable">
              First Name:{" "}
            </label>
            <input
              type="text"
              className={`${classDanger}`}
              id="first-name"
              ref={firstRef}
            />
            {!firstIsValid && (
              <div id="firstHelp" className="form-text text-danger">
                First name must be atleast 3 characters
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="col-form-lable">
              Last Name:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              ref={lastRef}
            />
            {!lastIsValid && (
              <div id="lastHelp" className="form-text text-danger">
                Last name must be atleast 3 characters
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="col-form-lable">
              Phone:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              ref={phoneRef}
            />
            {!phoneIsValid && (
              <div id="phoneHelp" className="form-text text-danger">
                phone number must be atleast 8 characters
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="col-form-lable">
              Email:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              ref={emailRef}
            />
            {!emailIsvalid && (
              <div id="emailHelp" className="form-text text-danger">
                please enter a valid email adress
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="col-form-lable">
              Password:{" "}
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              ref={passRef}
            />
            {!passIsValid && (
              <div id="passHelp" className="form-text text-danger">
                password must be at least 8 charachters and contain special
                character
              </div>
            )}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={createAccount}>
          Signup
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Signup_Modal;
