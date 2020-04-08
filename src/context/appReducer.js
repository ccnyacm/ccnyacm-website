import { IS_ERROR_CHANGE, ERROR_CHANGE, SELECTED_EVENT_CHANGE, SELECTED_MEMBER_CHANGE } from './types';

export default (state, action) => {
  switch(action.type) {
    case IS_ERROR_CHANGE:
      return { ...state, hasError: action.payload };
    case ERROR_CHANGE:
      return { ...state, error: action.payload };
    case SELECTED_EVENT_CHANGE:
      return {...state, selectedEventId: action.payload};
    case SELECTED_MEMBER_CHANGE:
      return { ...state, selectedMemberId: action.payload };
    default:
      return state;
  }
}