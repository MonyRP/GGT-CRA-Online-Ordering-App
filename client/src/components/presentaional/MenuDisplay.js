import React, { Fragment, useState } from 'react';
// import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import s from '../../styles/MenuDisplay.module.css';

const MenuDisplay = (props) => {
  const [lastCategory, setLastCategory] = useState('');

  return (
    <Fragment>
      <div className={s.menuItemsContainer}>
        {props.meals.map((meal, index) => (
          <div className={s.card} key={index}>
            <h4 className={s.cardHeader}>{meal.mealName}</h4>
            <p className={s.cardDescription}>{meal.description}</p>
            <h5 className={s.cardPrice}>{meal.price}</h5>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

MenuDisplay.propTypes = {};

export default MenuDisplay;
