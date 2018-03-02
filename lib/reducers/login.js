
import { combineReducers } from 'redux';
import { setNamespace } from '../store';


function agreement( state, action ) {
  return { ...state, agreement: action.payload.agreement };
}


const ns = setNamespace( 'login', {});
export default ns( combineReducers({
  agreement
}));
