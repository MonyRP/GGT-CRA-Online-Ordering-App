import React from 'react';
import { Fragment } from 'react';

import PropTypes from 'prop-types';
import s from '../../../styles/OrderPageHome.module.css';

// Components
import OrderPageNavbar from '../../layout/OrderPageNavbar';
import OrderPageOptionsBar from '../../layout/OrderPageOptionsBar';
import MenuDisplay from '../../presentaional/MenuDisplay';

const OrderPageHome = (props) => {
  return (
    <Fragment>
      <div className={s.navOptContainer}>
        <OrderPageNavbar />
        <OrderPageOptionsBar />
      </div>

      <div className={s.mainSection}>
        <MenuDisplay />
        <div className={s.tempCheckout}></div>
      </div>
    </Fragment>
  );
};

OrderPageHome.propTypes = {};

export default OrderPageHome;
