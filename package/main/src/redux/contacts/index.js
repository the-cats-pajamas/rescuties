import { combineReducers } from "redux";
import contacts from "./Contacts";
import contactsDetails from "./ContactsDetails";
import contactsVisibilityFilter from "./ContactsVisibilityFilter";
import contactsSearch from "./ContactsSearch";
import editContact from "./EditContact";

export default combineReducers({
  contacts,
  contactsDetails,
  contactsVisibilityFilter,
  contactsSearch,
  editContact,
});
