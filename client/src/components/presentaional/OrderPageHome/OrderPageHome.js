import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import s from '../../../styles/OrderPageHome.module.css';

// Components
import OrderPageNavbar from '../../layout/OrderPageNavbar';
import OrderPageOptionsBar from '../../layout/OrderPageOptionsBar';
import MenuDisplay from '../../presentaional/MenuDisplay';
import Login from '../../containers/Login';

const OrderPageHome = () => {
  const [meals, setMeals] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    axios.get('/api/menu/menu-items').then(res => {
      console.log('res from useEffect: ', res.data);
      setMeals(res.data);
    });
  }, []);

  // Open login modal
  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  // Close login modal
  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <Fragment>
      {showLoginModal && <Login closeLoginModal={closeLoginModal} />}
      <div className={s.navOptContainer}>
        <OrderPageNavbar openLoginModal={openLoginModal} />
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

OrderPageHome.propTypes = {};

export default OrderPageHome;
