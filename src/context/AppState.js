import React, { useReducer } from 'react';
import appReducer from './appReducer';
import AppContext from './appContext';
import { IS_ERROR_CHANGE, ERROR_CHANGE } from './types';

export const AppState = ({ children }) => {
  const INITIAL_STATE = {
    error: '',
    isError: false,
    events: [],
    members: [],
    about: '',
    thingsWeDo: '',
  };

  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  const setIsError = (value) => {
    dispatch({ type: IS_ERROR_CHANGE, payload: value });
  };

  const setError = (value) => {
    dispatch({ type: ERROR_CHANGE, payload: value })
  };
  
  return (
    <AppContext.Provider
      value={{
        ...state,
        setIsError,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}