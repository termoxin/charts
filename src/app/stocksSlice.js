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
  stocks: [],
};

// возвращает массив данных асинхронно
export const fetchStocskData = createAsyncThunk(
  'stocksData/getAllData',
  async () => {
    const response = await fakeApi.getAllData();
    // The value we return becomes the `fulfilled` action payload
    return response;
  },
);

// возвращаем асинхронно один объект для отрисовки
export const fetchPieceData = createAsyncThunk(
  'stocksData/getSinglePiece',
  async (code) => {
    const response = await fakeApi.getSinglePiece(code);
    return response;
  },
);

export const stocksSlice = createSlice({
  name: 'stocksData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocskData.fulfilled, (state, action) => {
        state.stocks = action.payload;
      })
      .addCase(fetchPieceData.fulfilled, (state) => {
        console.log(state.stocks);
      });
  },
});

export const selectData = (state) => state.stocks.stocks;

export default stocksSlice.reducer;
