import React from 'react';
import s from '../../styles/Login.module.css';

const Login = ({ closeLoginModal }) => {
  return (
    <div className={s.modal}>
      <form className={`${s.modalContent} ${s.animate}`} action='/action_page.php' method='post'>
        <div className={s.imgcontainer}>
          <span onClick={closeLoginModal} className={s.close} title='Close Modal'>
            &times;
          </span>
          {/* <img src="img_avatar2.png" alt="Avatar" className="avatar"> */}
        </div>

        <div className={s.container}>
          <label htmlFor='uname'>
            <b>Username</b>
          </label>
          <input
            className={s.textAndPasswordInput}
            type='text'
            placeholder='Enter Username'
            name='uname'
            required
          />

          <label htmlFor='psw'>
            <b>Password</b>
          </label>
          <input
            className={s.textAndPasswordInput}
            type='password'
            placeholder='Enter Password'
            name='psw'
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

export default Login;
