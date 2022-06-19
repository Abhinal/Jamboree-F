import Cookies from "js-cookie";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLoginState,
  makeHeaders,
  updateAT,
  updateEmail,
  updateName,
  updatePhone,
  updateRT,
} from "../../store/reducer";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const baseUrl = "http://103.217.221.128/api/v1/";
  const history = useRouter();
  useEffect(() => {
    if (Cookies.get("at")) {
      fetch(baseUrl + "user/token/verify", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: Cookies.get("at") }),
      }).then((res) => {
        if (res.status !== 200) {
          Cookies.remove("at");
          dispatch(updateAT(""));
        } else {
        }
      });
    } else if (!Cookies.get("at")) {
      if (Cookies.get("rt")) {
        fetch(baseUrl + "user/token/verify", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: Cookies.get("rt") }),
        }).then((res) => {
          if (res.status === 200) {
            let refresh = Cookies.get("rt");

            fetch(baseUrl + "user/token/refresh", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ refresh: refresh }),
            }).then((res) => {
              res.json().then((resp) => {
                Cookies.set("at", resp.access, { expires: 2 });
                Cookies.set("rt", resp.refresh, { expires: 14 });
                Cookies.set("name", Cookies.get("name"), { expires: 14 });
                Cookies.set("email", Cookies.get("email"), { expires: 14 });
                Cookies.set("phone", Cookies.get("phone"), { expires: 14 });
                dispatch(updateAT(resp.access));
                dispatch(updateRT(resp.refresh));
                dispatch(updateName(Cookies.get("name")));
                dispatch(updateEmail(Cookies.get("email")));
                dispatch(updatePhone(Cookies.get("phone")));
              });
            });
          } else {
            Cookies.remove("rt");
            dispatch(updateRT(""));
          }
        });
      }
    }
  }, [dispatch]);

  dispatch(changeLoginState(Cookies.get("rt") ? true : false));
  const is_login = useSelector((state) => state.jamboree.is_login);
  if (is_login) {
    dispatch(updateName(Cookies.get("name")));
    dispatch(updateEmail(Cookies.get("email")));
    dispatch(updatePhone(Cookies.get("phone")));
    dispatch(updateAT(Cookies.get("at")));
    dispatch(updateRT(Cookies.get("rt")));
    dispatch(makeHeaders())
  }

  return (
    <div className="content">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />

      {children}
    </div>
  );
};

export default Layout;
