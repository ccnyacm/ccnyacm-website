import React, { useReducer } from 'react';
import appReducer from './appReducer';
import AppContext from './appContext';
import { IS_ERROR_CHANGE, ERROR_CHANGE, SELECTED_EVENT_CHANGE, SELECTED_MEMBER_CHANGE } from './types';

export const AppState = ({ children }) => {
  const INITIAL_STATE = {
    error: '',
    hasError: false,
    selectedEventId: '',
    selectedMemberId: '',
  };

  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  const setHasError = (value) => {
    dispatch({ type: IS_ERROR_CHANGE, payload: value });
  };

  const setError = (value) => {
    dispatch({ type: ERROR_CHANGE, payload: value })
  };

  const setSelectedEventId = (event) => {
    dispatch({ type: SELECTED_EVENT_CHANGE, payload: event });
  };

  const setSelectedMemberId = (member) => {
    dispatch({ type: SELECTED_MEMBER_CHANGE, payload: member });
  };
  
  return (
    <AppContext.Provider
      value={{
        ...state,
        setHasError,
        setError,
        setSelectedEventId,
        setSelectedMemberId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}