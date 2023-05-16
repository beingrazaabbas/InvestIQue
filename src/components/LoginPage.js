import { Button } from "antd";
import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  // Get the navigate function
  const navigate = useNavigate();

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Implement your authentication logic here

    // If authentication is successful, navigate to the home page
    navigate('/');
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}></div>
      <div className={styles.rightSection}>
        <img src="/logo.png" alt="InvestIQue Logo" className={styles.logo} />
        <h2>Discover your path to financial prosperity with InvestIQue</h2>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Login</button>
          <button id="password"href="/home"></button>
       

          
        </form>
        <div className={styles.register}>
          <span>New to InvestIQue?</span>
          <Button className={styles.registerButton} href="/register">

            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
