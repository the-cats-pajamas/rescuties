import superagent from 'superagent';

let initialState = {
  animals: ["Cat", "Dog", "Pomeranion", "Puppy"],
};

let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJkeWJMdkVsb0JBczBrZmxTek9obXR5MXE2WVA0cllhbWVyZFNIRW8xdzBiSXkzSjY4RSIsImp0aSI6ImQyOThiYmQ4MDg2YzJkNzA5ZjgyMDI4NzVlMjI5NGFhOTY3MTNkNTM3MGRmMDU0YzJlOTZhOTkxMzA1NWYzYWI5MTljYTA1MTU4ODUzNTAyIiwiaWF0IjoxNjEyOTEyMDYzLCJuYmYiOjE2MTI5MTIwNjMsImV4cCI6MTYxMjkxNTY2Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.xCV0TuS2r_3aimAbmGBHJGh36nr7XNGI9Scxko4kXzWM7Jh6LbaW6rpQ23JNSzgdwHwWPq8Fdq2x-OjktGFhmhzJRA1T4-z8HoOzP9HWKA5KntSEz5orZ2Gp1TjgfiE8FiLbwr14LRuPtZO2esUGq4U9dPUb3xWxorpfm5UDZZyieLp_7Cr6yo6xvF8R2EwHsQq66KVx0VMpZo7TQ5OTHBspKtVlFT6GFEidjVEEUVMQlWLOWa9UkIxbJCsSrpYtoCFSFX6P5Eb_jYGCpTca_vdKushsZiCooHKaRrFpktjgW_SzfAQ3a2o06QVT708Pg7ld42t8Ie3XZIuH6Qf7IQ';

const parseJwt = (token) => {
  try {
   let jwt = JSON.parse(atob(token.split('.')[1]));
   console.log('jwt expires at', new Date(jwt.exp))
   return jwt;
  } catch (e) {
    return null;
  }
};
parseJwt(token);

export const get = () => dispatch => {
  return superagent
    .get('https://api.petfinder.com/v2/animals?page=2')
    .auth(token, {type: 'bearer'})
    .then(response => {
      dispatch(getAction(response.body));
    });
};

export const getAction = payload => {
  console.log('payload______', payload.animals)
  return {
    type: 'GET',
    payload: payload,
  };
};

export default (state = initialState, action) => {
  console.log('in the switch statement', action);
  let { type, payload } = action;
  switch (type) {
    case 'GET':
      console.log('Response from get request:', payload.animals)
      return {
        results:payload,
      };
    default:
      return state;
  }
};