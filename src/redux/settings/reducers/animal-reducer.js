import superagent from 'superagent';
require('dotenv').config();
const id = process.env.REACT_APP_ID;
const secret = process.env.REACT_APP_SECRET;

let initialState = {
  animals: [],
};

let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJkeWJMdkVsb0JBczBrZmxTek9obXR5MXE2WVA0cllhbWVyZFNIRW8xdzBiSXkzSjY4RSIsImp0aSI6IjNiZjUzMzcyODY0OTViMGJmNTFmNjdkYTc5MDQ4MmI0ZjA4ZGE3OWY0NzFmYjFmN2RkZWE0MjlmZGEyZTJjNmU5YmExOTM4OTkwYjI3ZDE4IiwiaWF0IjoxNjEyOTEyNjU5LCJuYmYiOjE2MTI5MTI2NTksImV4cCI6MTYxMjkxNjI1OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.YvQ5WHHeIbRQh7TEGczaykBBV4Dyexfmuu4nnAhHHO6gYWv3g885StiLYjV-J4B5rztLHX6xo6qEILcEXqRrpsUoJgeP1EvqX3UHx8ROcVawCCDOouRTwvtBduYinwyoCQ7fIu1sQYyQLiAByxVC2zZeoY6xunHdNz5cf4RjYPaM_2D93kUjS_LmcYGeD3nvlDqXLb6Wg1-unTN1hvxF7bItxFiTLeOPStoREsV-AoCada7EZSdTMTLiDmDc8ZJ4N7G_nMM9yb9mzdb0n3O_o6dqSbLKSDsBUEB4kbHjpfccuD_8r_SiymX0VH3FF-KWTg_YGuTm6bfgcBo-Uvc1fg';

function validateToken(token){
  try {
    if(!token) getNewToken();
   let jwt = JSON.parse(atob(token.split('.')[1]));
   console.log('jwt expires at', new Date(jwt.exp));
   if(jwt.exp > Date.now()) {
    console.log('expired token'); 
    getNewToken();
   }
   if(jwt.exp < Date.now()) {
    console.log('valid token'); 
     return "less than";
   }
   //return jwt;
  } catch (e) {
    return null;
  }
}

function getNewToken(){
  try{
    superagent.post('https://api.petfinder.com/v2/oauth2/token')
    .send({ grant_type: 'client_credentials' })
    .send({ client_id: id })
    .send({ client_securet: secret })
    .then(results => {
      let newToken = results.body.access_token;
      console.log('new token, who dis?', newToken);
      return newToken;
    })
  }
  catch(error){
    console.error(error)
  };
}

setToken();

async function setToken() {
  try {
    let token = await validateToken();
    localStorage.setItem('token', JSON.stringify(token));
  } catch (err) { return undefined; }
}


export const get = () => dispatch => {
  return superagent
    .get('https://api.petfinder.com/v2/animals?page=2')
    .auth(token, {type: 'bearer'})
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
        results:payload,
      };
    default:
      return state;
  }
};