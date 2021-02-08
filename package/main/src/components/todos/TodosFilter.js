import React, { useState } from "react";
import { Modal, ModalHeader, ListGroup } from "reactstrap";
import { todoVisiblityFilter } from "../../redux/todos/Action";
import FilterLink from "./FliterLink";
import AddTodo from "./AddTodo";
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
          Add Task
        </span>
      </div>

      <div className="filter-listing">
        <ListGroup flush>
          <FilterLink filter={todoVisiblityFilter.SHOW_ALL_TODO}>
            <i className="ti-clipboard mr-2"></i> All
          </FilterLink>
        </ListGroup>
        <hr className="" />
        <h6 className="mb-0 mt-2 p-3">Filters</h6>
        <ListGroup flush>
          <FilterLink filter={todoVisiblityFilter.STARRED_TODO}>
            <i className="far fa-star mr-2"></i> Starred
          </FilterLink>
          <FilterLink filter={todoVisiblityFilter.COMPLETED_TODO}>
            <i className="far fa-check-circle mr-2"></i> Completed Todos
          </FilterLink>
          <FilterLink filter={todoVisiblityFilter.DELETED_TODO}>
            <i className="icon-trash mr-2"></i> Deleted Todos
          </FilterLink>
        </ListGroup>
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle.bind(null)}
        className={props.className}
        size="md"
      >
        <ModalHeader toggle={toggle.bind(null)}>Add Contact</ModalHeader>
        <AddTodo onButtonClick={toggle.bind(null)} />
      </Modal>
    </div>
  );
};
