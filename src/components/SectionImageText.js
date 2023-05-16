import { Image } from "antd";
import React from "react";
import styles from "./SectionImageText.module.scss";

const SectionImageText = ({ imageUrl, aboutText, heading, paragraph }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={"image_card.png"} alt="section-image" />
      </div>
      <div className={styles.right}>
        <div className={styles.aboutBox}>{aboutText}</div>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default SectionImageText;
