import React from "react";
import { Form, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { noteSearch } from "../../redux/notes/Action";

const NoteSearch = () => {
  const searchTerm = useSelector((state) => state.notesReducer.noteSearch);

  const dispatch = useDispatch();

  return (
    <div className="p-3 border-bottom">
      <h5 className="card-title">Search Note</h5>
      <Form>
        <div className="position-relative has-icon-left">
          <Input
            className="form-control"
            id="searchNote"
            name="searchNote"
            type="text"
            onChange={(e) => dispatch(noteSearch(e.target.value))}
            value={searchTerm}
            placeholder="Type here to search..."
          />
        </div>
      </Form>
    </div>
  );
};

export default NoteSearch;
