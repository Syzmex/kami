
import is from 'whatitis';
import asyncReducer from './asyncReducer';


const ASYNC_REDUCER_ACTION = Symbol( 'ASYNC_REDUCER_ACTION' );

export function arCreator( action ) {
  return Object.defineProperty( action, ASYNC_REDUCER_ACTION, { value: true });
}

function property( key ) {
  return function( obj ) {
    return is.Undefined( obj ) ? undefined : obj[key];
  };
}

const isAsyncReducerAction = property( ASYNC_REDUCER_ACTION );
export function createAsyncReducer( options ) {
  return store => next => action => {
    if ( isAsyncReducerAction( action )) {
      const ar = asyncReducer( action );
      if ( is.Function( ar )) {
        return ar( store, action );
      }
    }
    return next( action );
  };
}
