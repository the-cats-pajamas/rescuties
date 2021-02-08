import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoSearch } from "../../redux/todos/Action";

const TodoSearch = () => {
  const value = useSelector((state) => state.todoReducer.todoSearch);

  const dispatch = useDispatch();

  return (
    <div className="bg-light p-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search Todos"
        onChange={(e) => dispatch(todoSearch(e.target.value))}
        defaultValue={value}
      />
    </div>
  );
};

export default TodoSearch;
