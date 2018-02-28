
import is from 'whatitis';

const ASYNC_ACTION = Symbol( 'ASYNC_ACTION' );

export function aaCreator( action ) {
  return Object.defineProperty( action, ASYNC_ACTION, { value: true });
}

export function createAsyncAction( options ) {
  const isAsyncAction = property( ASYNC_ACTION );
  return store => next => action => {
    if ( isAsyncAction( action )) {
      const aa = asyncActions( action );
      if ( is.Function( aa )) {
        aa( store, action );
      }
    }
    return next( action );
  };
}
