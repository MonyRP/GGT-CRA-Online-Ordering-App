import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from '../../styles/Alert.module.css';

const Alert = ({ alerts }) =>
  alerts.map(alert => (
    <div className={s.alert} key={alert.id}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
