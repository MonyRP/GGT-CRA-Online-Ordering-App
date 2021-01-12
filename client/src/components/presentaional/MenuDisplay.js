import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import s from '../../styles/MenuDisplay.module.css';

const MenuDisplay = (props) => {
  return (
    <Fragment>
      <div className={s.container}>
        <div className={s.card}>
          <h4 className={s.cardHeader}>Green Chile Cheese Burger</h4>
          <p className={s.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis.
          </p>
          <h5 className={s.cardPrice}>$9.50</h5>
        </div>

        <div className={s.card}>
          <h4 className={s.cardHeader}>Plain Cheese Burger</h4>
          <p className={s.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis.
          </p>
          <h5 className={s.cardPrice}>$8.50</h5>
        </div>

        <div className={s.card}>
          <h4 className={s.cardHeader}>Bacon Cheese Burger</h4>
          <p className={s.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis.
          </p>
          <h5 className={s.cardPrice}>$8.50</h5>
        </div>
      </div>
    </Fragment>
  );
};

MenuDisplay.propTypes = {};

export default MenuDisplay;
