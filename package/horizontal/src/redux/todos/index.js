import { combineReducers } from "redux";

import todosVisibilityFilter from "./TodosVisibilityFilter";
import todoSearch from "./TodoSearch";

const todoReducer = combineReducers({
  todosVisibilityFilter,
  todoSearch,
});

export default todoReducer;
