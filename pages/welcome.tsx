import NavBar from "../components/Navbar";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { authActions } from "../store/store";

const Welcome = () => {
  const isauth = useSelector((state) => state.auth.isAuthenticated);
  const idtoken = useSelector((state) => state.auth.token);
  // console.log(isauth, idtoken);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const passFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const idTokens = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const changePass = (data) => {
    const newPass = data.password;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA-z1uq8DNREKJRa4syC1zrjh-8H_vR1N0",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idTokens,
          password: newPass,
          returnSecureToken: false,
        }),
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => {
      if (res.ok) {
        Router.push("/");
      } else alert("Password changefailed please try again");
    });
  };

  const logout = () => {
    dispatch(authActions.logout(""));
    Router.push("/");
    console.log(isauth, idtoken);
  };

  return (
    <div>
      <NavBar />
      <div className="container mt-4 ">
        <h1 className="text-center text-dark mb-3">Welcome</h1>
        <form
          onSubmit={handleSubmit((data) => {
            changePass(data);
          })}
        >
          <div className="mb-3">
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
              placeholder="Enter new password"
            />
            {errors.password && (
              <p className="text-danger mt-2">{errors.password.message}</p>
            )}
          </div>
          <div className="d-flex justify-content-center">
            {" "}
            <button type="submit" className="btn btn-primary">
              Change Password
            </button>
          </div>
        </form>
        <div className="my-5 d-flex justify-content-center">
          <button className="btn btn-primary" onClick={() => logout()}>
            Logout
          </button>
          <Link href="/">
            <a className="mx-5 text-center py-2">home</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
{
  /* <Form className="my-5" onSubmit={}>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Control type="email" placeholder="Enter new password" />
</Form.Group>
<div className="d-flex justify-content-center">
  <Button variant="primary" type="submit">
    Change Password
  </Button>
</div>
</Form> */
}
