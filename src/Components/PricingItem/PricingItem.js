import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const ChooseItemColor = ({ label }) => {
  let Color = '';

  switch (label) {
    case 'Bronze':
      Color = '#dd7c4b';
      break;
    case 'Silver':
      Color = '#c0c0c0';
      break;
    case 'Gold':
      Color = '#dda431';
      break;
    default:
      Color = '';
  }

  return Color;
};

const PricingItem = ({ icon, label, capacity, description, price }) => (
  <div className={styles.pricingItem}>
    <div className={styles.icon}>
      <img src={icon} alt="item icon" />
    </div>
    <h2 className={styles.label} style={{ color: ChooseItemColor({ label }) }}>
      {label}
    </h2>
    <p className={styles.capacity}>{capacity}</p>
    <p className={styles.description}>{description}</p>
    <p className={styles.price}>${price}/MO</p>
    <button
      type="button"
      className={styles.button}
      style={{ backgroundColor: ChooseItemColor({ label }) }}
    >
      Get Started
    </button>
  </div>
);

PricingItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default PricingItem;
