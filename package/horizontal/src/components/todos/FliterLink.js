import React from "react";
import { setVisibilityFilterTodo } from "../../redux/todos/Action";
import { useSelector, useDispatch } from "react-redux";

const FilterLink = (props) => {
  const active = useSelector(
    (state) => props.filter === state.todoReducer.todosVisibilityFilter
  );

  const dispatch = useDispatch();

  return (
    <li
      className={"list-group-item" + (active ? " bg-light" : "")}
      onClick={() => dispatch(setVisibilityFilterTodo(props.filter))}
    >
      <span className="list-group-item-action">{props.children}</span>
    </li>
  );
};

export default FilterLink;
