import { Card } from "antd";
import React from "react";
import { BsCheck } from "react-icons/bs";
import styles from "./SectionTextCards.module.scss";

const SectionTextCards = ({ aboutText, heading, paragraph, cardData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.aboutBox}>{aboutText}</div>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
      <div className={styles.right}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            className={styles.card}
            bordered={false}
            hoverable
            title={
              <span>
                <BsCheck style={{ fontSize: "3rem" }} /> <br />
                <p style={{ marginTop: "0", paddingTop: "0rem" }}>
                  {" "}
                  {card.title}
                </p>
              </span>
            }
          >
            <p>{card.content}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SectionTextCards;
