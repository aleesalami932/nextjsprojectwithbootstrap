import React, { useState } from "react";
import Signup_Modal from "../Modal/Signup_modal";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/store";

const Login_form = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState<boolean>(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const router = useRouter();

  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const login = (data) => {
    dispatch(authActions.setLoading(true));
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-z1uq8DNREKJRa4syC1zrjh-8H_vR1N0",
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
          router.push("/welcome");
          return res.json();
          // dispatch(authActions.login())
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
  };

  return (
    <div>
      <h1 className="text-center mb-3 text-warning">Login</h1>
      <form
        onSubmit={handleSubmit((data) => {
          login(data);
        })}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            {...register("email", {
              required: "This feild is required",
              pattern: {
                message: "please enter a valid email adress",
                value: mailFormat,
              },
            })}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          {errors.email && (
            <p className="text-danger mt-2">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
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
          Login
        </button>
        <a onClick={openModal} className="mx-5">
          Dont have an account? Sign up
        </a>
      </form>
      <Signup_Modal show={show} handleClose={closeModal} />
    </div>
  );
};

export default Login_form;
