import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const RandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  return c;
};

const Stats = ({ title, stats }) => (
  <section className={styles.statsSection}>
    {title.length > 0 && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={styles.item}
          style={{ backgroundColor: RandomColor() }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}> {stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Stats;
