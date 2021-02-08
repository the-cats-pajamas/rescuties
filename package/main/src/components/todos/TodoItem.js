import React from "react";
import PropTypes from "prop-types";
import {
  ListGroupItem,
  CustomInput,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
const TodoItem = ({
  onTodoClick,
  onStarredClick,
  onDeleteClick,
  starred,
  onCheckClick,
  title,
  isCompleted,
  desc,
  deleted,
  active,
  id,
}) => (
  <ListGroupItem
    className={active === id ? "bg-light" : ""}
    onClick={onTodoClick}
  >
    <div className="list-group-item-action border-bottom">
      <ListGroupItemHeading>
        <span className="d-flex align-items-center">
          <CustomInput
            type="checkbox"
            id={id}
            checked={isCompleted}
            label=" "
            onChange={onCheckClick}
          />
          <span className="d-block"> {title}</span>
        </span>
      </ListGroupItemHeading>
      <ListGroupItemText className="mb-1">
        <span className="text-truncate d-block">{desc}</span>
      </ListGroupItemText>
      <span>
        <i
          onClick={onStarredClick}
          className={starred ? "fas fa-star" : "far fa-star"}
          style={{ color: starred ? "#FFC107" : "#495057" }}
        ></i>
        {!deleted ? (
          <i onClick={onDeleteClick} className="fas fa-trash-alt ml-3"></i>
        ) : (
          <i onClick={onDeleteClick} className="icon-action-undo ml-3"></i>
        )}
      </span>
    </div>
  </ListGroupItem>
);

TodoItem.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  onStarredClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default TodoItem;
