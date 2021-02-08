import { CONTACT_DETAILS } from "../constants";
const ContactsDetails = (state = "", action) => {
  switch (action.type) {
    case CONTACT_DETAILS:
      return action.id;
    default:
      return state;
  }
};

export default ContactsDetails;
