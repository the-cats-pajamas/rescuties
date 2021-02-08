import { SET_VISIBILITY_FILTER_TODO } from "../constants";
import { todoVisiblityFilter } from "./Action";

const TodoVisiblityFilter = (
  state = todoVisiblityFilter.SHOW_ALL_TODO,
  action
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER_TODO:
      return action.filter;
    default:
      return state;
  }
};

export default TodoVisiblityFilter;
