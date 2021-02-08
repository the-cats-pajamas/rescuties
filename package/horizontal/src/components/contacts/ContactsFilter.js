import React, { useState } from "react";
import { Modal, ModalHeader, ListGroup, ListGroupItem } from "reactstrap";
import FilterLink from "../../components/contacts/Link";
import { contactVisiblityFilter } from "../../redux/contacts/Action";
import AddContact from "./AddContact";

export default (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  return (
    <div>
      <div className="p-3">
        <span
          onClick={toggle.bind(null)}
          className="btn btn-danger d-block text-white"
        >
          New Contact
        </span>
      </div>
      <div className="divider"></div>
      <ListGroup flush className="filter-listing">
        <FilterLink filter={contactVisiblityFilter.SHOW_ALL}>
          <i className="fas fa-users mr-2"></i> All
        </FilterLink>
        <FilterLink filter={contactVisiblityFilter.FREQUENT_CONTACT}>
          <i className="fas fa-sync-alt mr-2"></i> Frequent
        </FilterLink>
        <FilterLink filter={contactVisiblityFilter.STARRED_CONTACT}>
          <i className="fas fa-star mr-2"></i> Starred
        </FilterLink>
        <ListGroupItem>
          <hr />
        </ListGroupItem>
        <FilterLink
          filter={contactVisiblityFilter.ENGINEERING_DEPARTMENT_CONTACT}
          departmentValue="Engineering"
        >
          <i className="fas fa-tags mr-2"></i> Engineering
        </FilterLink>
        <FilterLink
          filter={contactVisiblityFilter.SALES_DEPARTMENT_CONTACT}
          departmentValue="Sales"
        >
          <i className="fas fa-tags mr-2"></i> Sales
        </FilterLink>
        <FilterLink
          filter={contactVisiblityFilter.SUPPORT_DEPARTMENT_CONTACT}
          departmentValue="Support"
        >
          <i className="fas fa-tags mr-2"></i> Support
        </FilterLink>
      </ListGroup>
      <Modal
        isOpen={modal}
        toggle={toggle.bind(null)}
        className={props.className}
        size="md"
      >
        <ModalHeader toggle={toggle.bind(null)}>Add Contact</ModalHeader>
        <AddContact />
      </Modal>
    </div>
  );
};
