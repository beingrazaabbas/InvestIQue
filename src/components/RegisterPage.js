import React, { useState } from "react";
import { Button } from "antd";
import { auth, firestore } from "./firebase"; // import Firebase
import styles from "./LoginPage.module.scss";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Store user data in Firestore
      await firestore.collection('users').doc(user.uid).set({
        email: user.email,
        uid: user.uid
      });

      console.log('Registration successful:', user);
    } catch (error) {
      console.error('Error in user registration: ', error);
      alert("Error in registration. Check console for more details.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}></div>
      <div className={styles.rightSection}>
        <img src="/logo.png" alt="InvestIQue Logo" className={styles.logo} />
        <h2>Discover your path to financial prosperity with InvestIQue</h2>
        <form className={styles.form} onSubmit={handleRegister}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        <div className={styles.register}>
          <span>Already a member of InvestIQue?</span>
          <Button className={styles.registerButton} href="/login">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
