import { Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div>
      <div className={styles.navContainer}>
        <div>
          <Link to="/">
            <div className={styles.imgNav}>
              <Image src={"/logo.png"} alt="arushi" width={200} />
            </div>
          </Link>
        </div>
        <div className={styles.navMenu}>
          <Link className={styles.navLink} to="/">Home</Link>
          <Link className={styles.navLink} to="/AboutUs">About us</Link>
          <Link className={styles.navLink} to="/services">Services</Link>
          <Link className={styles.navLink} to="/profile">Profile</Link>
        </div>
      </div>
    </div>
  );
}
