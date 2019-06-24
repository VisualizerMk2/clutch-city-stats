import React from 'react';
import styles from './PlayerCard.module.css';

const PlayerCard = (props) => {
  return (
    <div className={styles.card}>
      <h2>
        {props.firstName} {props.lastName}
      </h2>
      <p>Jersey #{props.jersey}</p>
      <p>Position: {props.teamSitesOnly.posFull}</p>
      <p>
        Height: {props.heightFeet}' {props.heightInches}"
      </p>
      <p>Weight: {props.weightPounds}lb.</p>
    </div>
  );
};

export default PlayerCard;
