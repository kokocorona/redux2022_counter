import './App.css';
import React, { useState } from 'react';
import AppRoutes from './appRoutes';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import counterReducer from "./features/counter"


function App() {

  const store = configureStore({
    reducer:{
      counter:counterReducer
    }
  })
  return (
    <Provider store={store } >
      <AppRoutes />
    </Provider>

  );
}

export default App;
