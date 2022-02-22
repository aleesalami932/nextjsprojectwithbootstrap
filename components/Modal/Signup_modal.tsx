import React from "react";
import { useRouter } from "next/router";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { ref, set } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/store";
import { useSingUserHelper } from "../../helper/singUser";
import styles from "./styles.module.css";
import CustomTextArea from "./CustomTextArea";

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
  const isLoading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  function signUpUser(data: Data) {
    dispatch(authActions.setLoading(true));
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-z1uq8DNREKJRa4syC1zrjh-8H_vR1N0",
      {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        dispatch(authActions.setLoading(false));
        if (res.ok) {
          const userId = Date.now().toString();
          set(ref(db, "users/" + userId), {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
          });
          router.push("/welcome");
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        dispatch(authActions.login(data.idToken));
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  const router = useRouter();

  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  return (
    // <Modal show={show} onHide={handleClose}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Signup</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <p className="lead">Fill out this form to signup</p>
    //     <form
    //       onSubmit={handleSubmit((data) => {
    //         signUpUser(data);
    //       })}
    //     >
    //       <div className="mb-3">
    //         <label htmlFor="first-name" className="col-form-lable">
    //           First Name:{" "}
    //         </label>
    //         <input
    //           {...register("firstName", {
    //             required: "This feild is required",
    //             minLength: {
    //               value: 3,
    //               message: "First name must be atleast 3 characters",
    //             },
    //           })}
    //           type="text"
    //           className="form-control"
    //           id="first-name"
    //         />
    //         {errors.firstName && (
    //           <p className="text-danger mt-2">{errors.firstName.message}</p>
    //         )}
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="last-name" className="col-form-lable">
    //           Last Name:{" "}
    //         </label>
    //         <input
    //           {...register("lastName", {
    //             required: "This feild is required",
    //             minLength: {
    //               value: 3,
    //               message: "Last name must be atleast 3 characters",
    //             },
    //           })}
    //           type="text"
    //           className="form-control"
    //           id="last-name"
    //         />
    //         {errors.lastName && (
    //           <p className="text-danger mt-2">{errors.lastName.message}</p>
    //         )}
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="phone" className="col-form-lable">
    //           Phone:{" "}
    //         </label>
    //         <input
    //           {...register("phone", {
    //             required: "This feild is required",
    //             minLength: {
    //               value: 8,
    //               message: "Please enter a valid phone Number",
    //             },
    //           })}
    //           type="text"
    //           className="form-control"
    //           id="phone"
    //         />
    //         {errors.phone && (
    //           <p className="text-danger mt-2">{errors.phone.message}</p>
    //         )}
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="email" className="col-form-lable">
    //           Email:{" "}
    //         </label>
    //         <input
    //           {...register("email", {
    //             required: "This feild is required",
    //             pattern: {
    //               message: "please enter a valid email adress",
    //               value: mailFormat,
    //             },
    //           })}
    //           type="text"
    //           className="form-control"
    //           id="email"
    //         />
    //         {errors.email && (
    //           <p className="text-danger mt-2">{errors.email.message}</p>
    //         )}
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="phone" className="col-form-lable">
    //           Password:{" "}
    //         </label>
    //         <input
    //           {...register("password", {
    //             required: "this feild is required",
    //             pattern: {
    //               message:
    //                 "password must be at least 8 charachters and contain special character",
    //               value: passFormat,
    //             },
    //           })}
    //           type="password"
    //           className="form-control"
    //           id="password"
    //         />
    //         {errors.password && (
    //           <p className="text-danger mt-2">{errors.password.message}</p>
    //         )}
    //       </div>
    //       {isLoading && <p className="lead">Loading Please wait</p>}
    //       {!isLoading && (
    //         <button type="submit" className="btn btn-primary">
    //           Signup
    //         </button>
    //       )}
    //     </form>
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button variant="secondary" onClick={handleClose}>
    //       Close
    //     </Button>

    //     {/* <Button variant="primary">Signup</Button> */}
    //   </Modal.Footer>
    // </Modal>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Publish News</Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0">
        {/* <Form>
          <Form.Group className="mb-3" controlId="newsArea">
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            className={styles.buttonWidth}
          >
            hello
          </Button>
        </Form> */}
        <CustomTextArea />
      </Modal.Body>

      <div className="d-flex flex-row justify-content-start border-0">
        <Modal.Footer className="border-0">
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default Signup_Modal;
