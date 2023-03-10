import React from 'react';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Media from 'react-media';
import Layout from '../Navigation/Layout';
import { Currency } from '../DashboardPage/Currency/Currency';

import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

import { getIsFetchingCurrent } from '../../redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../../redux/auth/operations';
import './App.module.css';

const Register = lazy(() => import('../Auth/RegistrationForm'));
const Login = lazy(() => import('../Auth/Login'));
const DashboardPage = lazy(() => import('../DashboardPage/DashboardPage'));
const Statistics = lazy(() => import('../DashboardPage/Statistics/Statistics'));
const Transactions = lazy(() =>
  import('../DashboardPage/Transactions/Transactions')
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute restricted redirectTo="wallet/home">
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted redirectTo="/wallet/home">
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/wallet"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          >
            <Route path="diagram" element={<Statistics />} />
            <Route path="home" element={<Transactions />} />
            <Route
              path="currency"
              element={
                <Media query="(max-width: 767px)" render={() => <Currency />} />
              }
            />
          </Route>
        </Route>
      </Routes>
    )
  );
};
