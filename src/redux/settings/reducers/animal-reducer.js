import superagent from 'superagent';

let initialState = {
  animals: [],
};

let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJkeWJMdkVsb0JBczBrZmxTek9obXR5MXE2WVA0cllhbWVyZFNIRW8xdzBiSXkzSjY4RSIsImp0aSI6IjQ2ZTNlMTc4Zjg4NTFlZmY2ZjgwMDBlZGQ1OGJkODliOGY1YjQ0OWMzY2E0MGJjYTdlNDFiZGM0MjBhNzdiMDAwODJiMzE0ZGVkZGY2ODMyIiwiaWF0IjoxNjEyOTA3NDY2LCJuYmYiOjE2MTI5MDc0NjYsImV4cCI6MTYxMjkxMTA2Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.x-ViS8Mit0_K9upP1Q2VN5zc4BvzarrSD3LeyVeC_oTjGPpMKTw5f7ha7SR40kiF7GumTq6v_ODqKum_0-v50Oe21NsRFwI_TRpaW1ZcAXgv_LJ5XNOqBuMI4c1m1yNubifnwOHSJIGn0VlIyQl_N2ssO7xjXCIyUCKXmsGDp4dE6Fb7_m4WeM-Qfs_ERQHHcBvOdIr7ay8nnw9OghCpGPbknywPg_XQJg5v2UH9s9Lz1nxx3z9tLelxAOk6llKVgiLmsYdes8mzH9i-O2StrnbHP3yS9p9QYDrOH9NEbU1H_NJ-H-PkeemZUUgbVYgTZQLRcnsb0OUPlGRF_5roxA';

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