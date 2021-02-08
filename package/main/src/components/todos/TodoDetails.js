import React, { Fragment } from "react";
import { Input, CustomInput, Button } from "reactstrap";
//import todoDetails from "../../redux/todoDetails";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTodo,
  deleteTodo,
  todoCompleted,
} from "../../redux/todos/Action";
const TodoDetails = () => {
  const selectedTodos = useSelector(
    (state) =>
      state.maintodoReducer.todos[state.maintodoReducer.todoDetails - 1]
  );
  //const editContactFlag = useSelector((state) => state.contactReducer.editContact);

  const dispatch = useDispatch();
  return (
    <Fragment>
      {selectedTodos && !selectedTodos.deleted ? (
        <div className="p-4">
          <div>
            <CustomInput
              type="checkbox"
              id={selectedTodos.id}
              checked={selectedTodos.isCompleted}
              label=" "
              onChange={() => dispatch(todoCompleted(selectedTodos.id))}
            />
            <h5 className="mt-4">Task title</h5>
            <Input
              type="text"
              id="title"
              name="title"
              rows="5"
              value={selectedTodos.title}
              onChange={(e) =>
                dispatch(updateTodo(selectedTodos.id, "title", e.target.value))
              }
            />
            <h5 className="mt-4">Task Description</h5>
            <Input
              type="textarea"
              id="title"
              name="title"
              rows="5"
              value={selectedTodos.desc}
              onChange={(e) =>
                dispatch(updateTodo(selectedTodos.id, "desc", e.target.value))
              }
            />
            <Button
              className="mt-4 btn btn-danger"
              onClick={() => {
                dispatch(deleteTodo(selectedTodos.id));
              }}
            >
              Delete Todo
            </Button>
          </div>
        </div>
      ) : (
        <div className="d-flex h-100 p-4 flex-column align-items-center justify-content-center">
          <i className="far fa-address-card display-5"></i>
          <h4 className="mt-2">Please select a Todo to see details.</h4>
        </div>
      )}
    </Fragment>
  );
};

export default TodoDetails;
