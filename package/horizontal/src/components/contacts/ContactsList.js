import React from "react";
import { Table } from "reactstrap";
import Contact from "./Contact";
import {
  toggleStarredContact,
  deleteContact,
  contactVisiblityFilter,
  contactDetails,
} from "../../redux/contacts/Action";
import { useSelector, useDispatch } from "react-redux";

const ContactsList = ({ showRightPart }) => {
  const getVisibleContacts = (contacts, filter, contactsSearch) => {
    switch (filter) {
      case contactVisiblityFilter.SHOW_ALL:
        return contacts.filter(
          (c) =>
            !c.deleted &&
            c.firstname
              .toLocaleLowerCase()
              .concat(" ")
              .concat(c.lastname.toLocaleLowerCase())
              .includes(contactsSearch.toLocaleLowerCase())
        );
      case contactVisiblityFilter.FREQUENT_CONTACT:
        return contacts.filter(
          (c) =>
            c.frequentlycontacted &&
            !c.deleted &&
            c.firstname
              .toLocaleLowerCase()
              .concat(" ")
              .concat(c.lastname.toLocaleLowerCase())
              .includes(contactsSearch.toLocaleLowerCase())
        );
      case contactVisiblityFilter.STARRED_CONTACT:
        return contacts.filter(
          (c) =>
            c.starred &&
            !c.deleted &&
            c.firstname
              .toLocaleLowerCase()
              .concat(" ")
              .concat(c.lastname.toLocaleLowerCase())
              .includes(contactsSearch.toLocaleLowerCase())
        );
      case contactVisiblityFilter.ENGINEERING_DEPARTMENT_CONTACT:
        return contacts.filter(
          (c) =>
            c.department === "Engineering" &&
            !c.deleted &&
            c.firstname
              .toLocaleLowerCase()
              .concat(" ")
              .concat(c.lastname.toLocaleLowerCase())
              .includes(contactsSearch.toLocaleLowerCase())
        );
      case contactVisiblityFilter.SUPPORT_DEPARTMENT_CONTACT:
        return contacts.filter(
          (c) =>
            c.department === "Support" &&
            !c.deleted &&
            c.firstname
              .toLocaleLowerCase()
              .concat(" ")
              .concat(c.lastname.toLocaleLowerCase())
              .includes(contactsSearch.toLocaleLowerCase())
        );
      case contactVisiblityFilter.SALES_DEPARTMENT_CONTACT:
        return contacts.filter(
          (c) =>
            c.department === "Sales" &&
            !c.deleted &&
            c.firstname
              .toLocaleLowerCase()
              .concat(" ")
              .concat(c.lastname.toLocaleLowerCase())
              .includes(contactsSearch.toLocaleLowerCase())
        );
      case contactVisiblityFilter.DELETED_CONTACT:
        return contacts.filter(
          (c) =>
            c.deleted &&
            c.firstname
              .toLocaleLowerCase()
              .concat(" ")
              .concat(c.lastname.toLocaleLowerCase())
              .includes(contactsSearch.toLocaleLowerCase())
        );
      default:
        throw new Error("Unknown filter: " + filter);
    }
  };

  const contacts = getVisibleContacts(
    useSelector((state) => state.contactReducer.contacts),
    useSelector((state) => state.contactReducer.contactsVisibilityFilter),
    useSelector((state) => state.contactReducer.contactsSearch)
  );

  const active = useSelector((state) => state.contactReducer.contactsDetails);

  const dispatch = useDispatch();

  return (
    <div className="table-responsive listing-over">
      <Table className="table listing-table no-wrap table-hover v-middle mb-0">
        <tbody>
          {contacts.map((contact) => (
            <Contact
              key={contact.id}
              active={active}
              {...contact}
              onStarredClick={() => dispatch(toggleStarredContact(contact.id))}
              onDeleteClick={() => dispatch(deleteContact(contact.id))}
              onContactClick={() => {
                dispatch(contactDetails(contact.id));
                showRightPart();
              }}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactsList;
