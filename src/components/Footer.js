import React from 'react';
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container mx-auto py-16 px-4 grid lg:grid-cols-3 gap-20 text-gray-300`}>
        <div>
          <h1 className="name">InvestIQue.</h1>
          <p className="py-4">
          Your assets in confidence,
Invest with evidence.
          </p>
          <div className="flex justify-between md:w-3/4 my-6">
            <FaFacebookSquare size={30} className="footer-icon" />
            <FaInstagram size={30} className="footer-icon" />
            <FaTwitterSquare size={30} className="footer-icon" />
            <FaGithubSquare size={30} className="footer-icon" />
            <FaDribbbleSquare size={30} className="footer-icon" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-footer gap-4 lg:justify-items-center lg:col-span-2 lg:gap-0">
          </div>
      </div>
    </footer>
  );
};

export default Footer;
