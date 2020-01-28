import { IS_ERROR_CHANGE, ERROR_CHANGE } from './types';

export default (state, action) => {
  switch(action.type) {
    case IS_ERROR_CHANGE:
      return { ...state, isError: action.payload };
    case ERROR_CHANGE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}