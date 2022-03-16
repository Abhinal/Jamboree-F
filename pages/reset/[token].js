import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Authentication/reset.module.css";

export default function Reset() {
  const [password, setPassword] = useState("");
  const [pwdError, setPwdError] = useState("");

  const router = useRouter();
  const { token } = router.query;

  const resetLink = async (e) => {
    e.preventDefault();
    const response = await fetch("http://103.217.221.98/api/v1/user/password_reset/confirm/", {
      method: "POST",
      body: JSON.stringify({
        token,
        password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        alert("Password change sucessfully.")
        router.push("/")

      } else {
          res.json().then((err) => {
              setPassword("")
              err.password?setPwdError(err.password[0]):alert("Token Expired")
          })
      }
    });
  };


  return (
    <div id="login">
      <h3 className="text-center text-white pt-5">Login form</h3>
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className={pwdError ? "col-md-12 "+styles.redph : "col-md-12"}>
              <fieldset className={styles["the-fieldset"]}>
                <legend className={styles["the-legend"]}>Password</legend>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={"form-control border-0"}
                  placeholder={pwdError ? pwdError : "Create new password."}
                  color="red"
                  aria-describedby="name"
                  required
                />
              </fieldset>
            </div>
            <button
              type="submit"
              onClick={resetLink}
              className="btn w-100 mt-2 btn-dark-jm"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
