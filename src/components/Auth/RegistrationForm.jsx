import register from '../../images/currency/register.png';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterApi } from 'redux/AuthRedux/operations';

import 'react-toastify/dist/ReactToastify.css';
import s from './Auth.module.css';
import Media from 'react-media';
import { useState } from 'react';
import Photo from './AuthPhoto';
import RegistrationPage from './RegistrationPage';
import ModalAuth from './ModalAuth';
import { getAuthToken } from 'redux/AuthRedux/selectors';

export const mediaQueriesAuth = {
  mobile: '(min-width: 320px) and (max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1279px)',
  desktop: '(min-width: 1280px)',
};
const Register = () => {
  const Token = useSelector(getAuthToken);
  const [chek, setChek] = useState();
  const [text, setText] = useState(
    'The password must contain from 6 to 12 characters and the name from 1 to 12 letters'
  );
  const [close, setClose] = useState({isEror: true, isText: ""});
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const { email, username, password, userpassword } = e;
    const beginWithoutDigit = /^\D.*$/;
    const withoutSpecialChars = /^[^-() /]*$/;
    const containsLetters = /^.*[a-zA-Z]+.*$/;
    if (
      password.length >= 6 &&
      password.length <= 12 &&
      username.length > 1 &&
      username.length <= 12
    ) {
      if (
        beginWithoutDigit.test(password) &&
        withoutSpecialChars.test(password) &&
        containsLetters.test(password)
      ) {
        password === userpassword
          ? dispatch(RegisterApi({ email, username, password }))
          : setText('The password does not match');
      } else {
        setClose(true);
        setText(
          'Your password is misspelled, it must contain letters and numbers '
        );
      }
    } else {
      setClose(true);
      setText(
        'The password must contain from 6 to 12 characters and the name from 1 to 12 letters'
      );
    }
  };
  const handlePassword = e => {
    const good = { width: '100%', backgroundColor: '#24cca7' };
    const normally = { width: '45%', backgroundColor: 'orange' };
    const badly = { width: '25%', backgroundColor: 'red' };
    const refresh = { width: '0%', backgroundColor: '#E5F1EF' };
    if (e.length > 0 && e.length < 3) {
      setChek(refresh);
    }
    if (e.length > 3 && e.length < 5) {
      setChek(badly);
    }
    if (e.length >= 6 && e.length <= 8) {
      setChek(normally);
    }
    if (e.length >= 8 && e.length <= 12) {
      setChek(good);
    }
  };
  const handleClose = e => {
    setClose(e => false);
  };
  const handleOpen = e => {
    setClose(true);
  };
  const handlText = e => {
    setText(e)
    Token &&  setClose(true);
  };
  return (
    <div className={s.section}>
      <Media queries={mediaQueriesAuth}>
        {matches =>
          (matches.tablet || matches.desktop) && <Photo img={register} />
        }
      </Media>
      {close && <ModalAuth handleClose={handleClose} text={text} />}
      <div className={s.body}>
        <RegistrationPage
          handleSubmit={handleSubmit}
          handlePassword={handlePassword}
          chek={chek}
          handlText={handlText}
        />
      </div>
    </div>
  );
};
export default Register;