import router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/store";
import { ref, set } from "firebase/database";
import { db } from "../firebase";

export const useSingUserHelper = (url: string, inOrUp: boolean, data: any) => {
  const dispatch = useDispatch();
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    dispatch(authActions.setLoading(false));
    if (res.ok) {
      if (inOrUp) {
        const userId = Date.now().toString();
        set(ref(db, "users/" + userId), {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
        });
      }
      router.push("/");
    } else {
      return res.json().then((data) => {
        let errorMessage = "Authentication Failed";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        alert(errorMessage);
      });
    }
  });
};
