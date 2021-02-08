import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTodos,
  todoDetails,
  deleteTodo,
  toggleStarredTodo,
  todoCompleted,
} from "../../redux/todos/Action";
import { ListGroup } from "reactstrap";
const TodoList = ({ showRightPart }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  /// Get Filtered Todo
  const getVisibleTodos = (todos, filter, todosSearch) => {
    switch (filter) {
      case "all":
        return todos.filter(
          (t) =>
            !t.deleted &&
            t.title
              .toLocaleLowerCase()
              .concat(" ")
              .includes(todosSearch.toLocaleLowerCase())
        );
      case "starred":
        return todos.filter(
          (t) =>
            t.starred &&
            !t.deleted &&
            t.title
              .toLocaleLowerCase()
              .concat(" ")
              .includes(todosSearch.toLocaleLowerCase())
        );
      case "deleted":
        return todos.filter(
          (t) =>
            t.deleted &&
            t.title
              .toLocaleLowerCase()
              .concat(" ")
              .includes(todosSearch.toLocaleLowerCase())
        );
      case "completed":
        return todos.filter(
          (t) =>
            !t.deleted &&
            t.isCompleted &&
            t.title
              .toLocaleLowerCase()
              .concat(" ")
              .includes(todosSearch.toLocaleLowerCase())
        );
      default:
        throw new Error("Unknown filter: " + filter);
      //return todos
    }
  };

  const todos = getVisibleTodos(
    useSelector((state) => state.maintodoReducer.todos),
    useSelector((state) => state.todoReducer.todosVisibilityFilter),
    useSelector((state) => state.todoReducer.todoSearch)
  );
  //const todos = useSelector((state) => state.todoReducer.todos);
  const active = useSelector((state) => state.maintodoReducer.todoDetails);

  /// Return Todo
  return (
    <div>
      <ListGroup flush className="listing-over border-top">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            active={active}
            onCheckClick={() => dispatch(todoCompleted(todo.id))}
            onStarredClick={() => dispatch(toggleStarredTodo(todo.id))}
            onDeleteClick={() => {
              dispatch(deleteTodo(todo.id));
              console.log(todo.id);
            }}
            onTodoClick={() => {
              dispatch(todoDetails(todo.id));
              showRightPart();
            }}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
