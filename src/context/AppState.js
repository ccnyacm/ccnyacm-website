import React, { useReducer } from 'react';
import appReducer from './appReducer';
import AppContext from './appContext';
import { getAllEvents  } from '../services/eventServices';
import { getAllMembers } from '../services/memberServices';
import { 
  IS_ERROR_CHANGE,
  ERROR_CHANGE,
  SELECTED_EVENT_CHANGE,
  SELECTED_MEMBER_CHANGE,
  ALL_EVENTS,
  ALL_MEMBERS,
} from './types';

export const AppState = ({ children }) => {
  const INITIAL_STATE = {
    error: '',
    hasError: false,
    selectedEventId: '',
    selectedMemberId: '',
    members: [],
    events: [],
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
  const getEvents = async () => {
    try {
      const events = await getAllEvents();
      dispatch({ type: ALL_EVENTS, payload: events });
    } catch (error) {
      setError(error.message);
      setHasError(true);
    }
  
  const getMembers = async () => {
    try {
     const members = await getAllMembers();
     dispatch({ type: ALL_MEMBERS, payload: members });
    } catch (error) {
      setError(error.message);
      setHasError(true);
    }
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        setHasError,
        setError,
        setSelectedEventId,
        setSelectedMemberId,
        getEvents,
        getMembers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}