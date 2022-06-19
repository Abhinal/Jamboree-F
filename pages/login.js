import { SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";
import Image from "next/image";
import styles from "../styles/Authentication/Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLoginState,
  updateAT,
  updateEmail,
  updateName,
  updatePhone,
  updateRT,
} from "../store/reducer";

export default function Login() {
  const is_login = useSelector((state) => state.jamboree.is_login);
  // const name = useSelector((state) => state.jamboree.username);
  const [name, setName] = useState("")
  const router = useRouter();
  if (is_login) {
    router.back();
  } else{
    
  }

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [is_existing, setIs_existing] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const [nameError, setNameError] = useState("");
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [pwdError, setPwdError] = useState("");
   
  useEffect(() => {
    
  }, [is_existing, name])

  const fetchUser = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://103.217.221.128/api/v1/user/check_email",
      {
        method: "POST",
        body: JSON.stringify({
          email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        res.json().then((resp) => {
          setIs_existing(resp.is_existing);
          setEmailValid(true);
          if (resp.name) {
            dispatch(updateName(resp.name));
            setName(resp.name)
          }
        });
      } else {
        res.json().then((err) => {
          setEmailError(err.email);
          setEmail("");
        });
      }
    });
  };

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("http://103.217.221.128/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((resp) => {
          Cookies.set("at", resp.at, { expires: 2 });
          Cookies.set("rt", resp.rt, { expires: 14 });
          Cookies.set("name", resp.name, { expires: 14 });
          Cookies.set("email", resp.email, { expires: 14 });
          Cookies.set("phone", resp.phone_number, { expires: 14 });
          dispatch(changeLoginState(true));
          dispatch(updateAT(resp.at));
          dispatch(updateRT(resp.rt));
          dispatch(updateEmail(resp.email));
          dispatch(updateName(resp.name));
          dispatch(updatePhone(resp.phone_number));
          router.back();
        });
      } else {
        res.json().then((err) => {
          setPwdError(err.password);
          setPassword("");
        });
      }
    });
  };

  const signup = async (e) => {
    e.preventDefault();
    const response = await fetch("http://data.revizify.com/api/v1/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((resp) => {
          Cookies.set("at", resp.at, { expires: 2 });
          Cookies.set("rt", resp.rt, { expires: 14 });
          Cookies.set("name", resp.name, { expires: 14 });
          dispatch(changeLoginState(true));
          dispatch(updateAT(resp.at));
          dispatch(updateRT(resp.rt));
          dispatch(updateEmail(resp.email));
          dispatch(updateName(resp.name));
          dispatch(updatePhone(resp.phone_number));
          router.back();
        });
      } else {
        res.json().then((err) => {
          err ? (err.email ? setEmail("") : setEmail(email)) : setEmail(email);
          err
            ? err.password
              ? setPassword("")
              : setPassword(password)
            : setPassword(password);
          err ? (err.name ? setName("") : setName(name)) : setName(name);
          setEmailError(err ? (err.email ? err.email.slice(0, 1)[0] : "") : "");
          setPwdError(
            err ? (err.password ? err.password.slice(0, 1)[0] : "") : ""
          );
          setNameError(err ? (err.name ? err.name.slice(0, 1)[0] : "") : "");
        });
      }
    });
  };

  const resetLink = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://103.217.221.128/api/v1/user/password_reset/",
      {
        method: "POST",
        body: JSON.stringify({
          email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        alert("Password reset link sent sucessfully.");
      }
    });
  };

  return (
    <>
      <div
        className="container-fluid row px-0 mx-0 montserrat text-center"
        id="login"
      >
        <div className="col-lg-8 col-md-6 d-flex" id={styles["login-image"]}>
          <div className="text-left col-md-6 mt-auto mb-lg-5 ml-lg-5 pl-3 pb-5">
            <h3 className="text-white">
              <b>Lorem Ipsum is simply dummy text of the</b>{" "}
            </h3>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6 px-3 px-md-5 mt-lg-5 mt-md-3"
          id={styles["login-form"]}
        >
          <div className="px-2 container-fluid defaultColor">
            <div className="mb-lg-5 mb-md-4 mb-3 pe-auto">
              <Link href="/" passHref={true}>
                <Image
                  src="/images/logo.png"
                  alt="jamboree"
                  width={266}
                  height={86}
                />
              </Link>
            </div>

            <form className="text-left">
              <h3 className="text-center">
                {emailValid ? (
                  is_existing ? (
                    <>Login to your account</>
                  ) : (
                    <>Create your account</>
                  )
                ) : (
                  <>Welcome to JamBoree!</>
                )}
              </h3>
              {emailValid ? (
                <p className="text-center">Welcome to JamBoree!</p>
              ) : (
                ""
              )}
              {emailValid ? (
                is_existing ? (
                  <>
                    <div
                      className={
                        pwdError ? "form-group " + styles.redph : "form-group "
                      }
                    >
                      <label>
                        Hi, {name}!{" "}
                        <a
                          role="button"
                          className="defaultColor"
                          onClick={() => (
                            setEmailValid(false), setPwdError("")
                          )}
                        >
                          (Not you?)
                        </a>
                      </label>
                      <br />
                      <fieldset className={styles["the-fieldset"]}>
                        <legend className={styles["the-legend"]}>
                          Password
                        </legend>
                        <input
                          type={visible ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className={"form-control border-0"}
                          placeholder={
                            pwdError ? pwdError : "Enter your password"
                          }
                          color="red"
                          required
                        />
                      </fieldset>
                    </div>
                    <span className="form-check d-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value={visible}
                        onClick={() => setVisible(!visible)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Show Password
                      </label>
                    </span>
                    <span
                      role="button"
                      onClick={resetLink}
                      className="d-inline float-right defaultColor"
                    >
                      Forget Password?
                    </span>
                    <button
                      type="submit"
                      onClick={login}
                      className="btn w-100 mt-2 btn-dark-jm"
                    >
                      Login
                    </button>
                  </>
                ) : (
                  <>
                    <div className="form-group">
                      <fieldset className={styles["the-fieldset"]}>
                        <legend className={styles["the-legend"]}>
                          E-Mail ID
                        </legend>
                        <input
                          value={email}
                          className={"form-control border-0 col-10 d-inline"}
                          readOnly
                        />
                        <a
                          onClick={() => setEmailValid(false)}
                          className="defaultColor px-2"
                          role="button"
                        >
                          Edit?
                        </a>
                      </fieldset>
                    </div>
                    <div
                      className={
                        nameError ? "form-group " + styles.redph : "form-group "
                      }
                    >
                      <fieldset className={styles["the-fieldset"]}>
                        <legend className={styles["the-legend"]}>
                          Full Name
                        </legend>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={"form-control border-0"}
                          placeholder={
                            nameError ? nameError : "Enter your name"
                          }
                          color="red"
                          aria-describedby="name"
                          required
                        />
                      </fieldset>
                    </div>

                    <div
                      className={
                        pwdError ? "form-group " + styles.redph : "form-group "
                      }
                    >
                      <fieldset className={styles["the-fieldset"]}>
                        <legend className={styles["the-legend"]}>
                          Password
                        </legend>
                        <input
                          type={visible ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className={"form-control border-0"}
                          placeholder={
                            pwdError ? pwdError : "Enter your password"
                          }
                          color="red"
                          required
                        />
                      </fieldset>
                    </div>
                    <span className="form-check d-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value={visible}
                        onClick={() => setVisible(!visible)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Show Password
                      </label>
                    </span>
                    <button
                      type="submit"
                      onClick={signup}
                      className="btn w-100 mt-2 btn-dark-jm"
                    >
                      Register
                    </button>
                  </>
                )
              ) : (
                <>
                  <div
                    className={
                      emailError ? "form-group " + styles.redph : "form-group "
                    }
                  >
                    <fieldset className={styles["the-fieldset"]}>
                      <legend className={styles["the-legend"]}>
                        E-Mail ID
                      </legend>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={"form-control border-0"}
                        aria-describedby="emailHelp"
                        placeholder={
                          emailError ? emailError : "Enter your email id"
                        }
                        color="red"
                        required
                      />
                    </fieldset>
                  </div>
                  <button
                    type="submit"
                    onClick={fetchUser}
                    className="btn w-100 mt-2 btn-dark-jm"
                  >
                    Proceed
                  </button>
                </>
              )}
            </form>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}
