import React from "react";
import { setVisibilityFilter } from '../../redux/contacts/Action';
import { useSelector, useDispatch } from "react-redux";

const FilterLink = (props) => {

    const active = useSelector((state) => props.filter === state.contactReducer.contactsVisibilityFilter);

    const dispatch = useDispatch();

    return (
        <li className="list-group-item" onClick={() => dispatch(setVisibilityFilter(props.filter))}>
            <span className={"list-group-item-action " + (active ? "active" : "")}>
                {props.children}
            </span>
        </li>
    );
};

export default FilterLink;
