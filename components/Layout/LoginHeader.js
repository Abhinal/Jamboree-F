import React from "react";
import Link from "next/link";
import styles from "../../styles/Layout/Navbar.module.css";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";


export default function LoginHeader() {
    const router = useRouter()
    const name = useSelector((state) => state.jamboree.username);
    const logout = () => {
        Cookies.remove("at");
        Cookies.remove("rt");
        router.push("/")
      };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white fixed-top pr-lg-5 pr-md-4 "
      id="navbar"
    >
      <Link href="/">
        <a className={"ml-lg-5 ml-md-4 ml-sm-3 d-flex " + styles.logo}>
          <Image src={Logo} alt="jamboree" objectFit="contain" />
        </a>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className={"fas fa-lg fa-bars defaultColor p-1"} />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item" suppressHydrationWarning>
            <Link href="#">
              <a className="nav-link d-lg-none defaultColor">
                <i className="fas fa-lg fa-user-circle mr-2" />
                {name ? "Hi, " + name : "Hi, User"}
              </a>
            </Link>
            <hr />
          </li>

          <li className="nav-item">
            <Link href="/#about">
              <a className="nav-link">
                <i className="fas fa-info-circle mr-2  d-lg-none" />
                About us
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#reviews">
              <a className="nav-link">
                <i className="fas fa-star-half-alt mr-2 d-lg-none" />
                Reviews
              </a>
            </Link>
          </li>

          {/* <li className="nav-item">
                <Link href="/my-order">
                  <a className="nav-link">
                    <i className="fas fa-info-circle mr-2  d-lg-none" />
                    My orders
                  </a>
                </Link>
              </li> */}
          <li className="nav-item">
            <Link href="/faq">
              <a className="nav-link">
                <i className="fas fa-info-circle mr-2 d-lg-none" />
                Faq
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/cart">
              <a className="nav-link d-lg-flex flex-row-reverse align-items-center">
                <i className="fas fa-shopping-cart ml-lg-2 mr-2" />
                Cart
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" role="button" onClick={logout}>
              {/* <a className="nav-link"> */}
              <i className="fas fa-lg fa-user-circle ml-lg-2 mr-2 d-lg-none" />
              Logout
              {/* </a> */}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}