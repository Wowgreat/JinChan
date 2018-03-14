'use strict';
const initialState = {
  token:null
}

export default function getToken(state=initialState, action){
  switch (action.type) {
    case 'login':
      return {
        token:action.token
      }
    default:
      return state;
  }
}
