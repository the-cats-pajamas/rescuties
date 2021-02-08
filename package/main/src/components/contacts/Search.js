import React from "react";
import { contactsSearch } from "../../redux/contacts/Action";
import { useSelector, useDispatch } from "react-redux";

const Search = () => {

    const value = useSelector((state) => state.contactReducer.contactsSearch);

    const dispatch = useDispatch();

    return (
        <input
            type="text"
            className="form-control"
            placeholder="Search contacts"
            onChange={(e) => dispatch(contactsSearch(e.target.value))}
            defaultValue={value}
        />
    );
};

export default Search;
