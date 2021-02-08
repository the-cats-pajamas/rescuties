import axios from "axios";
import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  SET_VISIBILITY_FILTER_TODO,
  DELETE_TODO,
  TOGGLE_STARRED_TODO,
  TODO_DETAILS,
  FILTER_TODO,
  COMPLETE_TODO,
  UPDATE_TODO,
  ADD_TODO,
} from "../constants/";
import { History } from "../../jwt/_helpers";
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    axios
      .get("api/data/todo/todoData")
      .then((response) => {
        // response.data is the users
        const todos = response.data.slice(0, 10);
        dispatch(fetchTodosSuccess(todos));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchTodosFailure(error.message));
      });
  };
};

/////////////////////////////////////////////
//Axios part Reducers
////////////////////////////////////////////
export const fetchTodosRequest = () => {
  return {
    type: FETCH_TODO_REQUEST,
  };
};

export const fetchTodosSuccess = (todos) => {
  return {
    type: FETCH_TODO_SUCCESS,
    payload: todos,
  };
};

export const fetchTodosFailure = (error) => {
  return {
    type: FETCH_TODO_FAILURE,
    payload: error,
  };
};
/////////////////////////////////////////////
//Filter part Reducers
////////////////////////////////////////////

export const setVisibilityFilterTodo = (filter) => {
  return (dispatch) => {
    dispatch({ type: SET_VISIBILITY_FILTER_TODO, filter });
    History.push(`/todos/${filter}`);
  };
};
/////////////////////////////////////////////
//Starred Todo Toggle Reducers
////////////////////////////////////////////
export const toggleStarredTodo = (id) => ({
  type: TOGGLE_STARRED_TODO,
  id,
});

/////////////////////////////////////////////
//Delete Todo part Reducers
////////////////////////////////////////////
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});
/////////////////////////////////////////////
//Detail Todo part Reducers
////////////////////////////////////////////
export const todoDetails = (id) => ({
  type: TODO_DETAILS,
  id,
});

export const todoSearch = (searchTerm) => ({
  type: FILTER_TODO,
  payload: searchTerm,
});

export const todoCompleted = (id) => ({
  type: COMPLETE_TODO,
  id,
});

export const updateTodo = (id, field, value) => ({
  type: UPDATE_TODO,
  id: id,
  field: field,
  value: value,
});

export const addTodo = (id, title, desc) => ({
  type: ADD_TODO,
  id: id++,
  title: title ? title : "",
  desc: desc ? desc : "",
});

/////////////////////////////////////////////
//Detail Todo part Reducers
////////////////////////////////////////////
export const todoVisiblityFilter = {
  SHOW_ALL_TODO: "all",
  STARRED_TODO: "starred",
  DELETED_TODO: "deleted",
  COMPLETED_TODO: "completed",
};
