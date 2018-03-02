

const actionTypes = {

};


const LOGIN_AGREEMENT = 'LOGIN_AGREEMENT';


function agreement( agreement ) {
  return {
    type: LOGIN_AGREEMENT,
    payload: { agreement }
  };
}
