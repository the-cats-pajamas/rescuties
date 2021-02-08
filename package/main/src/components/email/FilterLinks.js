import React from "react";
import { setEmailVisibilityFilter } from "../../redux/email/Action";
import { useSelector, useDispatch } from "react-redux";

const FilterEmail = (props) => {
  const active = useSelector(
    (state) => props.filter === state.emailReducer.visibilityFilter
  );

  const dispatch = useDispatch();

  return (
    <li
      className="list-group-item"
      onClick={() => dispatch(setEmailVisibilityFilter(props.filter))}
      disabled={active}
    >
      <span className={"list-group-item-action " + (active ? "active" : "")}>
        {props.children}
      </span>
    </li>
  );
};

export default FilterEmail;
