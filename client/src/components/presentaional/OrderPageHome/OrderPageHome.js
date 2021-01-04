import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/OrderPageHome.module.css';

// Components
import OrderPageNavbar from '../../layout/OrderPageNavbar.js';

const OrderPageHome = (props) => {
  return (
    <div>
      <OrderPageNavbar />
    </div>
  );
};

OrderPageHome.propTypes = {};

export default OrderPageHome;
