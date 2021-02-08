import React from "react";
import { emailSearch } from "../../redux/email/Action";
import { useSelector, useDispatch } from "react-redux";

const EmailSearch = () => {
  const searchTerm = useSelector((state) => state.emailReducer.emailSearch);

  const dispatch = useDispatch();

  return (
    <div className="bg-light p-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search emails"
        onChange={(e) => dispatch(emailSearch(e.target.value))}
        value={searchTerm}
      />
    </div>
  );
};

export default EmailSearch;
