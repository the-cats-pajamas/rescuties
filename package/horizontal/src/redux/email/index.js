import { combineReducers } from "redux";
import emails from "./Emails";
import visibilityFilter from "./VisibilityFilter";
import selectedEmail from "./SelectedEmail";
import emailSearch from "./EmailSearch";
import emailContent from "./EmailContent";

const emailReducer = combineReducers({
  emails,
  visibilityFilter,
  selectedEmail,
  emailSearch,
  emailContent,
});

export default emailReducer;
