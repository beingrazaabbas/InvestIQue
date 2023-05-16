import { Button } from "antd";
import React from "react";
import styles from "./LoginPage.module.scss";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}></div>
      <div className={styles.rightSection}>
        <img src="/logo.png" alt="InvestIQue Logo" className={styles.logo} />
        <h2>Discover your path to financial prosperity with InvestIQue</h2>
        <form className={styles.form}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
          <button type="submit">Register</button>
        </form>
        <div className={styles.register}>
          <span>Already a memnber of Investique?</span>
          <Button className={styles.registerButton} href="/login">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
