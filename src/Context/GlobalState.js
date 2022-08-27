import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  expence: [
    { title: "one", value: 10, color: "#E38627" },
    { title: "two", value: 15, color: "#C13C37" },
    {  title: "three",value: 20, color: "#6A2135" },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function addExpence(exp) {
    dispatch({
      type: 'ADD_EXPENCE',
      payload: {value: Number(exp.value), color: exp.color, title: exp.title}
    });
  }

  return (<GlobalContext.Provider value={{
    expence: state.expence,
    addExpence
  }}>
    {children}
  </GlobalContext.Provider>);
}