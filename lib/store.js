
import withRedux from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import { createAsyncReducer } from './createAsyncReducer';


const INITIAL_STATE = {};

export const initStore = ( initialState = INITIAL_STATE ) => {
  return createStore(
    rootReducer, initialState,
    applyMiddleware( createAsyncReducer())
  );
};

export const reduxPage = ( comp ) => withRedux( initStore )( comp );

export const setNamespace = ( namespace, initialState = {}) => ( reducer ) => ( state, action ) => {
  INITIAL_STATE[namespace] = initialState;
  return reducer( state[namespace] || INITIAL_STATE[namespace], action );
};
