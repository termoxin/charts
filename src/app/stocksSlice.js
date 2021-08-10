/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fakeApi from './Api/api';
/*
  немного архитектуры
  что должен делать слайс?
  1. запрашивать асинхронный вызов всех данных
  2. запрашивать асинхронный вызов одного куска данных
  (под это нужно переписать api)
  3.
*/
const initialState = {
  stocksData: [],
};

// возвращает массив данных асинхронно
export const fetchStocskData = createAsyncThunk(
  'counter/setAllData',
  async () => {
    const response = await fakeApi.getAllData();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  },
);

// возвращаем асинхронно один объект для отрисовки
export const fetchPiecekData = createAsyncThunk(
  'counter/setSinglePiece',
  async (code) => {
    const response = await fakeApi.getSinglePiece(code);
    return response.data;
  },
);

export const stocksSlice = createSlice({
  name: 'stocksData',
  initialState,
  reducers: {},
});

export default stocksSlice.reducer;
