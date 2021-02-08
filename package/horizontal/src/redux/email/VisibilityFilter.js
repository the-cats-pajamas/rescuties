import { SET_EMAIL_VISIBILITY_FILTER } from "../constants/";
import { EmailVisibilityFilters } from "../email/Action";

const visibilityFilter = (
  state = EmailVisibilityFilters.SHOW_INBOX,
  action
) => {
  switch (action.type) {
    case SET_EMAIL_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
