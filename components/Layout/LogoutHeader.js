import React from "react";
import Link from "next/link";
import styles from "../../styles/Layout/Navbar.module.css";
import Image from "next/image";
import Logo from "../../public/images/logo.png";


export default function LogoutHeader() {
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
          <li className="nav-item">
            <Link href="/login">
              <a className="nav-link d-lg-none defaultColor">
                <i className="fas fa-lg fa-user-circle mr-2" />
                Login/Signup
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

          <li className="nav-item">
            <Link href="/login">
              <a className="nav-link d-none d-lg-block">
                Login/Signup
                <i className="fas fa-lg fa-user-circle ml-2 " />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
