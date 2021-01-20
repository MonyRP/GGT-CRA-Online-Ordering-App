import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import s from '../../../styles/OrderPageHome.module.css';

// Components
import OrderPageNavbar from '../../layout/OrderPageNavbar';
import OrderPageOptionsBar from '../../layout/OrderPageOptionsBar';
import MenuDisplay from '../../presentaional/MenuDisplay';

const OrderPageHome = (props) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios.get('/api/menu/menu-items').then((res) => {
      console.log('res from useEffect: ', res.data);
      setMeals(res.data);
    });
  }, []);

  return (
    <Fragment>
      <div className={s.navOptContainer}>
        <OrderPageNavbar />
        <OrderPageOptionsBar />
      </div>

      <div className={s.mainSection}>
        <div className={s.menuContainer}>
          {meals.map((menu) => (
            <div>
              <h2>{menu.category}</h2>
              <MenuDisplay meals={menu.items} />
            </div>
          ))}
        </div>
        <div className={s.tempCheckout}></div>
      </div>
    </Fragment>
  );
};

OrderPageHome.propTypes = {};

export default OrderPageHome;
