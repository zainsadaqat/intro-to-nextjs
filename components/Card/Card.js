import React from 'react';
import styles from './Card.module.css';

const Card = ({ name, phone, email, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles['card-header']}>
        <img src={image.url} alt={image.alt} className={styles['card-image']} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
