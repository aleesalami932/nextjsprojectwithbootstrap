import React from "react";
import { useRouter } from "next/router";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { ref, set } from "firebase/database";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/store";

interface Modalprops {
  show: boolean;
  handleClose?: () => void;
  createAccount?: () => void;
}

type Data = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password?: string;
};

const Signup_Modal: React.FC<Modalprops> = ({
  show,
  handleClose,
  children,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  function signUpUser(data: Data) {
    const userId = Date.now().toString();
    createUserWithEmailAndPassword(auth, data.email, data.password!)
      .then((userCredential) => {
        const user = userCredential.user;
        set(ref(db, "users/" + userId), {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
        });
        dispatch(authActions.login());
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  const router = useRouter();

  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">Fill out this form to signup</p>
        <form
          onSubmit={handleSubmit((data) => {
            signUpUser(data);
          })}
        >
          <div className="mb-3">
            <label htmlFor="first-name" className="col-form-lable">
              First Name:{" "}
            </label>
            <input
              {...register("firstName", {
                required: "This feild is required",
                minLength: {
                  value: 3,
                  message: "First name must be atleast 3 characters",
                },
              })}
              type="text"
              className="form-control"
              id="first-name"
            />
            {errors.firstName && (
              <p className="text-danger mt-2">{errors.firstName.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="col-form-lable">
              Last Name:{" "}
            </label>
            <input
              {...register("lastName", {
                required: "This feild is required",
                minLength: {
                  value: 3,
                  message: "Last name must be atleast 3 characters",
                },
              })}
              type="text"
              className="form-control"
              id="last-name"
            />
            {errors.lastName && (
              <p className="text-danger mt-2">{errors.lastName.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="col-form-lable">
              Phone:{" "}
            </label>
            <input
              {...register("phone", {
                required: "This feild is required",
                minLength: {
                  value: 8,
                  message: "Please enter a valid phone Number",
                },
              })}
              type="text"
              className="form-control"
              id="phone"
            />
            {errors.phone && (
              <p className="text-danger mt-2">{errors.phone.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="col-form-lable">
              Email:{" "}
            </label>
            <input
              {...register("email", {
                required: "This feild is required",
                pattern: {
                  message: "please enter a valid email adress",
                  value: mailFormat,
                },
              })}
              type="text"
              className="form-control"
              id="email"
            />
            {errors.email && (
              <p className="text-danger mt-2">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="col-form-lable">
              Password:{" "}
            </label>
            <input
              {...register("password", {
                required: "this feild is required",
                pattern: {
                  message:
                    "password must be at least 8 charachters and contain special character",
                  value: passFormat,
                },
              })}
              type="password"
              className="form-control"
              id="password"
            />
            {errors.password && (
              <p className="text-danger mt-2">{errors.password.message}</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>

        {/* <Button variant="primary">Signup</Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default Signup_Modal;
