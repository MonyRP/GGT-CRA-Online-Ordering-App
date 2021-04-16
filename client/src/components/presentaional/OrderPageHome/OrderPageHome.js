import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import PropTypes from 'prop-types';
import s from '../../../styles/OrderPageHome.module.css';

// Components
import OrderPageNavbar from '../../layout/OrderPageNavbar';
import OrderPageOptionsBar from '../../layout/OrderPageOptionsBar';
import MenuDisplay from '../../presentaional/MenuDisplay';
import Login from '../../containers/Login';
import SignUp from '../../containers/SignUp';

// Actions
import { logOutUser } from '../../../actions/auth';
import { LOGOUT_USER } from '../../../actions/types';

const OrderPageHome = ({ logOutUser, userLoggedIn }) => {
  const [meals, setMeals] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    axios.get('/api/menu/menu-items').then(res => {
      setMeals(res.data);
    });
  }, []);

  // Open sign up modal
  const openSignUpModal = () => {
    setShowSignUpModal(true);
  };

  // Close sign up modal
  const closeSignUpModal = () => {
    setShowSignUpModal(false);
  };

  // Open login modal
  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  // Close login modal
  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const logOutCurrentUser = () => {
    logOutUser({ type: LOGOUT_USER });
  };

  return (
    <Fragment>
      {showSignUpModal && <SignUp closeSignUpModal={closeSignUpModal} />}
      {showLoginModal && <Login closeLoginModal={closeLoginModal} />}
      <div className={s.navOptContainer}>
        <OrderPageNavbar
          openSignUpModal={openSignUpModal}
          openLoginModal={openLoginModal}
          userLoggedIn={userLoggedIn}
          logOutCurrentUser={logOutCurrentUser}
        />
        <OrderPageOptionsBar />
      </div>

      <div className={s.mainSection}>
        <div className={s.menuContainer}>
          {meals.map(menu => (
            <div key={menu.category}>
              <h2 className={s.category}>{menu.category}</h2>
              <MenuDisplay meals={menu.items} />
            </div>
          ))}
        </div>
        <div className={s.tempCheckoutContainer}>
          <div className={s.tempSummary}></div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return { userLoggedIn: state.auth.userLoggedIn };
};

OrderPageHome.propTypes = {};

export default connect(mapStateToProps, { logOutUser })(OrderPageHome);
