import { Formik, Field, Form } from 'formik';
import s from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LoginApi } from 'redux/AuthRedux/operations';
import sprite from '../Navigation/sprite.svg';
import sp from './Auth.svg';
import login from '../../images/currency/login.png';
import Photo from './AuthPhoto';
import { mediaQueriesAuth } from './RegistrationForm';
import Media from 'react-media';
const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    const { password } = e;
    if (password.length >= 6 && password.length <= 12) {
      console.log("login");
      dispatch(LoginApi(e));
    } else {
      return console.log('The password must contain from 6 to 12');
    }
  };
  return (
    <div className={s.section}>
      <Media queries={mediaQueriesAuth}>
        {matches =>
          (matches.tablet || matches.desktop) && <Photo img={login} />
        }
      </Media>
      <div className={s.body}>
        <div className={s.box}>
          <div className={s.logo}>
            <svg className={s.logoSvg}>
              <use href={`${sprite}#icon-logo-full`}></use>
            </svg>
          </div>
          <Formik
            initialValues={{ password: '', email: '' }}
            validate={({ password, email }) => {
              const errors = {};
              if (!email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i.test(email)
              ) {
                errors.email = 'Invalid email address';
              }
              console.log(errors);
              return errors;
            }}
            onSubmit={e => {
              handleSubmit(e);
            }}
          >
            <Form className={s.form}>
              <div className={s.inner}>
                <label>
                  <svg className={s.svg}>
                    <use href={`${sp}#email`}></use>
                  </svg>
                  <Field
                    name="email"
                    type="email"
                    required
                    className={s.field}
                    placeholder="E-mail"
                  />
                </label>
              </div>
              <div className={s.inner}>
                <label>
                  <svg className={s.svg}>
                    <use href={`${sp}#password`}></use>
                  </svg>
                  <Field
                    name="password"
                    type="password"
                    required
                    className={s.field}
                    placeholder="Password"
                  />
                </label>
              </div>
              <button type="submit" className={s.button}>
                Log in
              </button>
              <NavLink to="/register" className={s.link}>
                Register
              </NavLink>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Login;
