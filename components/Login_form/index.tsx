import Link from "next/link";
import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import Signup_Modal from "../Modal/Signup_modal";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const Login_form = () => {
  const [show, setShow] = useState<boolean>(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const router = useRouter();

  const [emailIsvalid, setEmailIsvalid] = useState<boolean>(true);
  const [passIsValid, setPassIsValid] = useState<boolean>(true);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  let classDanger: string = "";

  const loginEmailPassword = async () => {
    if (emailRef !== null && passRef !== null) {
      const loginEmail = emailRef.current!.value;
      const password = passRef.current!.value;
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

      if (passIsValid && emailIsvalid) {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
        classDanger = "border border-danger";
      }

      if (formIsValid) {
        signInWithEmailAndPassword(auth, loginEmail, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            router.push("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
    }
  };

  return (
    <div>
      <h1 className="text-center mb-3 text-warning">Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailRef}
            className={classDanger}
          />
          {!emailIsvalid && (
            <div id="firstHelp" className="form-text text-danger">
              please enter a valid email adress
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passRef}
            className={classDanger}
          />
          {!passIsValid && (
            <div id="lastHelp" className="form-text text-danger">
              password must be at least 8 charachters and contain special
              character
            </div>
          )}
        </Form.Group>
        <Button
          variant="primary"
          className="d-flex my-3"
          onClick={loginEmailPassword}
        >
          Login
        </Button>
        <Link href="">
          <a onClick={openModal}>Dont have an account? Sign up</a>
        </Link>
      </Form>
      <Signup_Modal show={show} handleClose={closeModal} />
    </div>
  );
};

export default Login_form;
