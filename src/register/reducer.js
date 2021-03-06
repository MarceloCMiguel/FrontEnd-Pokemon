import {
    REGISTER_USER
  } from './types';
  
  const initialState = {
    userData: {
      id: '',

    },
  };
  
  function registerReducer(state = initialState, {type, payload}) {
    switch (type) {
      case REGISTER_USER:
        return {...state, userData: {...state.userData, ...payload}};
  
      default:
        return state;
    }
  }
  
  export default registerReducer;
  