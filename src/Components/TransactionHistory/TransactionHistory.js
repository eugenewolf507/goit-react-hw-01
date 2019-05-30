import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr className={styles.tHead}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id} className={styles.tRow}>
          <td>{item.type}</td>
          <td>{item.currency}</td>
          <td>{item.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;
