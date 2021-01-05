import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import s from '../../styles/OrderPageNavbar.module.css';

const OrderPageNavbar = (props) => {
  return (
    <Fragment>
      {/* Navbar */}
      <div className={s.navbar}>
        <div className={s.container}>
          <div className={s.companyDetails}>
            <div className={s.companyName}>Company Name</div>
            <div className={s.companyAddress}>
              <i className='fas fa-map-marker-alt'></i>&nbsp;&nbsp;123 N. Circle St
            </div>
          </div>

          <button className={s.loginBtn}>
            <i className='far fa-user'></i>Log in
          </button>
        </div>
      </div>
    </Fragment>
  );
};

OrderPageNavbar.propTypes = {};

export default OrderPageNavbar;
