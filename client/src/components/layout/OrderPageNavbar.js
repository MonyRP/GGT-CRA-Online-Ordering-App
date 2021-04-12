import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import s from '../../styles/OrderPageNavbar.module.css';

const OrderPageNavbar = ({ openLoginModal, openSignUpModal, logOutCurrentUser, userLoggedIn }) => {
  console.log('OrderPageNavbar userLoggedIn:', userLoggedIn);
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

          {!userLoggedIn && (
            <div className={s.authenticationSection}>
              <button className={s.loginBtn} onClick={openLoginModal}>
                <i className='fas fa-sign-in-alt'></i>Log in
              </button>
              <button className={s.signUpBtn} onClick={openSignUpModal}>
                <i className='far fa-id-card'></i>Sign Up
              </button>
            </div>
          )}

          {userLoggedIn && (
            <button className={s.signUpBtn} onClick={logOutCurrentUser}>
              <i className='fas fa-sign-out-alt'></i>Log Out
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

OrderPageNavbar.propTypes = {};

export default OrderPageNavbar;
