import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Button,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../redux/todos/Action";

const AddContact = ({ onButtonClick }) => {
  let title, desc;
  const id = useSelector((state) => state.maintodoReducer.todos.length + 1);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo(id, title.value, desc.value));
          title.value = "";
          desc.value = "";
        }}
      >
        <ModalBody>
          <FormGroup>
            <Label for="title">Todo Title</Label>
            <input
              className="form-control"
              type="text"
              name="title"
              id="title"
              ref={(node) => (title = node)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="desc">Todo Desc</Label>
            <textarea
              className="form-control"
              name="desc"
              rows="5"
              id="desc"
              ref={(node) => (desc = node)}
              required
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onButtonClick} type="submit">
            Add Todo
          </Button>
        </ModalFooter>
      </Form>
    </React.Fragment>
  );
};

export default AddContact;
