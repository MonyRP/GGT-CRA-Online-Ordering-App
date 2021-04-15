import React from 'react';
import { useState } from 'react';

import s from '../../styles/SignUp.module.css';
import { connect } from 'react-redux';
import { signUpUser } from '../../actions/auth';

const SignUp = ({ closeSignUpModal, signUpUser }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;

  const onChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();

    // console.log('SignUp event: ', JSON.stringify(event, null, 2));
    signUpUser({ username, email, password });
    closeSignUpModal();
  };

  return (
    <div className={s.modal}>
      <form className={`${s.modalContent} ${s.animate}`} onSubmit={e => onSubmit(e)}>
        <div className={s.imgcontainer}>
          <span onClick={closeSignUpModal} className={s.close} title='Close Modal'>
            &times;
          </span>
          {/* <img src="img_avatar2.png" alt="Avatar" className="avatar"> */}
        </div>

        <div className={s.container}>
          <label htmlFor='username'>
            <b>Username</b>
          </label>
          <input
            className={s.textAndPasswordInput}
            type='text'
            placeholder='Enter Username'
            name='username'
            value={username}
            onChange={e => onChange(e)}
            required
          />

          <label htmlFor='email'>
            <b>Email</b>
          </label>
          <input
            className={s.textAndPasswordInput}
            type='text'
            placeholder='Enter Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />

          <label htmlFor='password'>
            <b>Password</b>
          </label>
          <input
            className={s.textAndPasswordInput}
            type='password'
            placeholder='Enter Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            required
          />

          <button className={s.btn} type='submit'>
            Login
          </button>
          <label>
            <input type='checkbox' name='remember' /> Remember me
          </label>
        </div>

        <div className={s.container}>
          <button className={s.btn} type='button' className={s.cancelbtn}>
            Cancel
          </button>
          <span className={s.psw}>
            Forgot <a href='#'>password?</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { signUpUser })(SignUp);
