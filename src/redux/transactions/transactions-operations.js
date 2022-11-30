import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://wallet.goit.ua/api/';

export const getTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transactions');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transactionDetails, thunkAPI) => {
    try {
      const { data } = await axios.post('/transactions', transactionDetails);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/transactions/${transactionId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editTransaction = createAsyncThunk(
  'transactions/editTransaction',
  async (transactionId, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/transactions/${transactionId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  'transactions/getCtegories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transaction-categories');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);