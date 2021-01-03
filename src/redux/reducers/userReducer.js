import * as types from '../actions/types';
// import {PURGE} from 'redux-persist';

export const INITIAL_STATE = {
  userObj: null,
  persistedContacts: [],
  isRTL: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {...state, userObj: action.payload};
    default:
      return state;
  }
};
