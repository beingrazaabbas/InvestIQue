import React from "react";
import { Card } from "antd";
import styles from "./SquadCard.module.scss";

const SquadCard = ({ name, photo, linkedin, instagram, github }) => {
  return (
    <Card className={styles.card} bordered={false} hoverable>
      <h3>{name}</h3>
      <img src={photo} alt={name} className={styles.photo} />
      <div className={styles.icons}>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <img src="/linkedin.png" alt="LinkedIn" />
        </a>
        <a href={instagram} target="_blank" rel="noreferrer">
          <img src="/instagram.png" alt="Instagram" />
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <img src="/github.png" alt="GitHub" />
        </a>
      </div>
    </Card>
  );
};

export default SquadCard;
