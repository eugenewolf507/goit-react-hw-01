import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingPlan.module.css';
import PricingItem from '../PricingItem/PricingItem';

const PricingPlan = ({ items }) => (
  <ul className={styles.pricingPlan}>
    {items.map(item => (
      <li key={item.label} className="item">
        <PricingItem {...item} />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default PricingPlan;
