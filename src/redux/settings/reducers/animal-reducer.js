import superagent from 'superagent';
require('dotenv').config();
const id = process.env.REACT_APP_ID;
const secret = process.env.REACT_APP_SECRET;

let initialState = {
  animals: [],
};

function validateToken(token) {
  try {
    if (!token) getNewToken();
    let jwt = JSON.parse(atob(token.split('.')[1]));
    console.log('jwt expires at', new Date(jwt.exp));
    if (jwt.exp > Date.now()) {
      console.log('expired token');
      getNewToken();
    }
    if (jwt.exp < Date.now()) console.log('valid token');
  } catch (e) {
    return null;
  }
}

function getNewToken() {
  try {
    superagent
      .post('https://api.petfinder.com/v2/oauth2/token')
      .send({ grant_type: 'client_credentials' })
      .send({ client_id: id })
      .send({ client_securet: secret })
      .then(results => {
        let newToken = results.body.access_token;
        console.log('new token, who dis?', newToken);
        localStorage.setItem('token', JSON.stringify(newToken));
        return newToken;
      });
  } catch (error) {
    console.error(error);
  }
}

validateToken();

export const get = () => dispatch => {
  const token = JSON.parse(localStorage.getItem('token'));
  return superagent
    .get('https://api.petfinder.com/v2/animals?page=2')
    .auth(token, { type: 'bearer' })
    .then(response => {
      dispatch(getAction(response.body));
    });
};

export const getAction = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'GET':
      return {
        results: payload,
      };
    default:
      return state;
  }
};
