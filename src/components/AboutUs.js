import React from 'react';
import { useTrail, animated } from 'react-spring';
import Navbar from './Navbar';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  const paragraphs = ["InvestIQue is a pioneering financial platform created to empower individuals with financial knowledge and investment opportunities. Our philosophy is rooted in the conviction that financial literacy is a fundamental right, not a privilege. We believe that understanding finance should be as commonplace as reading and writing.In the age of information, financial education should not be confined to textbooks or financial institutions. We at InvestIQue have dedicated ourselves to democratize this information, making it accessible, understandable, and actionable for all, regardless of their financial acumen.Our platform is designed to be an all-in-one solution for personal finance and investment needs. It offers a holistic approach towards finance, providing tools and resources for budgeting, savings, investments, retirement planning, and much more. Our user-friendly interface and seamless navigation ensure that you have a hassle-free experience.InvestIQue uses state-of-the-art technology to provide a safe and secure environment for your financial transactions. We also use advanced data analytics to offer personalized recommendations tailored to your financial goals and risk tolerance.Our educational resources are a cornerstone of InvestIQue. We strive to provide content that demystifies complex financial concepts, making them easy to understand for everyone. From articles and e-books to webinars and podcasts, we offer a wide range of resources to help you learn at your own pace and in your preferred format.Our team at InvestIQue is a diverse mix of dedicated professionals with deep expertise in finance, technology, and design. We are passionate about breaking down the barriers to financial literacy and making investing a seamless process for everyone.Furthermore, we understand that the financial landscape is ever-changing. To keep you ahead of the curve, we continuously update our platform with the latest market trends and investment opportunities.InvestIQue is more than just a platform; its a community. We provide a space for individuals to share their financial journeys, learn from each other, and grow together. Our forums and discussion boards are buzzing with insightful conversations, tips, and advice from our users and financial experts.InvestIQue is not just about making investments; its about investing in your financial growth and creating a prosperous future. We are dedicated to making your financial journey as smooth and successful as possible.Join us at InvestIQue, where finance meets simplicity, and start your journey towards financial independence today"]

  const trail = useTrail(paragraphs.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>About Investique</h1>
        {trail.map((animation, index) => (
          <animated.p key={index} style={animation}>
            {paragraphs[index]}
          </animated.p>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
