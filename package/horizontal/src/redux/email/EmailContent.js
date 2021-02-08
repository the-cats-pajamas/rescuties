import { OPEN_EMAIL } from "../constants/";

const emailContent = (state = "", action) => {
  switch (action.type) {
    case OPEN_EMAIL:
      return action.id;
    default:
      return state;
  }
};

export default emailContent;
