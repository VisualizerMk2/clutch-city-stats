import React from 'react';
import styles from './PlayerCard.module.scss';

const PlayerCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2>
          {props.firstName} {props.lastName}
        </h2>
      </div>
      <div className={styles.jerseyNumber}>
        <p>#{props.jersey}</p>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.position}>{props.teamSitesOnly.posFull}</p>
        <div className={styles.bioInfo}>
          <p>
            <span>Debut:</span> {props.nbaDebutYear}
          </p>
          <p>
            <span>Height:</span> {props.heightFeet}' {props.heightInches}"
          </p>
          <p>
            <span>Weight:</span> {props.weightPounds}lb.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
