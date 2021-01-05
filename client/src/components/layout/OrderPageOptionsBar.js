import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import s from '../../styles/OrderPageOptionsBar.module.css';

const OrderPageOptionsBar = (props) => {
  return (
    <Fragment>
      {/* Delivery/Pickup & Category options */}
      <div className={s.optionsBar}>
        <div className={s.container}>
          <div className={s.optionsBtnGroup}>
            <button className={s.pickupBtn}>
              <span>Pickup</span>
            </button>
            <button className={s.deliveryBtn}>
              <span>Delivery</span>
            </button>
          </div>
          <h5 className={s.forDiv}>for</h5>
          {/* Categories dropdown */}

          <button className={s.calendarDropdown}>
            <i className='far fa-calendar-alt'></i>&nbsp;&nbsp;Tue, Jan 5 @ 11:45pm&nbsp;&nbsp;
            <i className='fas fa-chevron-down'></i>
          </button>

          <div className={s.categories}>
            <div>Categories</div>
            <div className='fas fa-chevron-down'></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

OrderPageOptionsBar.propTypes = {};

export default OrderPageOptionsBar;
