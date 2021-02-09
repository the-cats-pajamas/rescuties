import superagent from 'superagent';

let initialState = {
  animals: ['animals'],
};

const parseJwt = (token) => {
  try {
   let jwt = JSON.parse(atob(token.split('.')[1]));
   console.log('jwt))))))))))))', jwt);
   console.log('jwt.exp!!!!!!!!!', new Date(jwt.exp))
   return jwt;
  } catch (e) {
    return null;
  }
};
parseJwt('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJkeWJMdkVsb0JBczBrZmxTek9obXR5MXE2WVA0cllhbWVyZFNIRW8xdzBiSXkzSjY4RSIsImp0aSI6ImEyYzk5YzJkMTc4ZGYyNzYzYmNkNmQwYTFmNzM2NTQzNTM5MDIxMDY2MWI1YjUzMjczZDk3ZThiZTRkOTM1MWUyMDhjZGZkNjgxZmU4ZmY2IiwiaWF0IjoxNjEyOTAzNzgxLCJuYmYiOjE2MTI5MDM3ODEsImV4cCI6MTYxMjkwNzM4MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.HUyWEhXpWs-2gQtjLdLzzRQEFwOQZgBdo2GWIIRHzkg3Fg0weh_vUFyaKoElh_jpfY8pvBONErRcQj2_o1ffRuZ5EG6s4mFcPKvkMhxup_r4g-Lw0mgYYTfaPhjk_301NQSmXZBNtaQRnbpHf-vZxFzHnCvn4WqLs3Bs4UrwVjbzCLbyPcvzLK5vLep32cgLmO4SMLhcmM8S122S6sLR1BRSgQvzZXDNjsYdedzydwnMyJx4c_WANxDlSiCJcLEkEo21n6RO6I6VI9LDAuSYeQq9LzyKynVUs8-dt3YXL6I_BuUmDqEkRzFIyyaWdfAXWuhD0aBBZM1cqoU86sHZag')

export const get = () => dispatch => {
  console.log("console logging get function")
  return superagent
    .get('https://api.petfinder.com/v2/animals?type=dog&page=2')
    .auth('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJkeWJMdkVsb0JBczBrZmxTek9obXR5MXE2WVA0cllhbWVyZFNIRW8xdzBiSXkzSjY4RSIsImp0aSI6ImEyYzk5YzJkMTc4ZGYyNzYzYmNkNmQwYTFmNzM2NTQzNTM5MDIxMDY2MWI1YjUzMjczZDk3ZThiZTRkOTM1MWUyMDhjZGZkNjgxZmU4ZmY2IiwiaWF0IjoxNjEyOTAzNzgxLCJuYmYiOjE2MTI5MDM3ODEsImV4cCI6MTYxMjkwNzM4MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.HUyWEhXpWs-2gQtjLdLzzRQEFwOQZgBdo2GWIIRHzkg3Fg0weh_vUFyaKoElh_jpfY8pvBONErRcQj2_o1ffRuZ5EG6s4mFcPKvkMhxup_r4g-Lw0mgYYTfaPhjk_301NQSmXZBNtaQRnbpHf-vZxFzHnCvn4WqLs3Bs4UrwVjbzCLbyPcvzLK5vLep32cgLmO4SMLhcmM8S122S6sLR1BRSgQvzZXDNjsYdedzydwnMyJx4c_WANxDlSiCJcLEkEo21n6RO6I6VI9LDAuSYeQq9LzyKynVUs8-dt3YXL6I_BuUmDqEkRzFIyyaWdfAXWuhD0aBBZM1cqoU86sHZag', {type: 'bearer'})
    .then(response => {
      console.log(`Here is the response from superagent: ${response.body}`);
      dispatch(getAction(response.body));
    });
};

export const getAction = payload => {
  console.log('payload______', payload)
  return {
    type: 'GET',
    payload: payload,
  };
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'GET':
      console.log('payload++++++++', payload)
      return {
        results: {...payload},
      };
    default:
      return state;
  }
};