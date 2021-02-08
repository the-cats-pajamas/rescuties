import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input } from "reactstrap";
import { updateNote, addNote } from "../../redux/notes/Action";
const NoteContent = () => {
  const noteDetails = useSelector(
    (state) => state.notesReducer.notes[state.notesReducer.notesContent - 1]
  );
  let title, color;
  const id = useSelector((state) => state.notesReducer.notes.length + 1);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="border-bottom p-3 text-right">
        <input
          className="d-none"
          type="text"
          name="title"
          id="title"
          ref={(node) => (title = node)}
        />
        <input
          className="d-none"
          type="text"
          name="color"
          id="color"
          ref={(node) => (color = node)}
        />
        <Button
          className="btn btn-success ml-auto"
          size="sm"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addNote(id, title.value, color.value));
            title.value = "";
            color.value = "";
          }}
        >
          Add New Note
        </Button>
      </div>
      {noteDetails && noteDetails.deleted === false ? (
        <div className="p-3">
          <h4 className="mt-2">Change Note Color</h4>
          <Input
            type="select"
            className="col-md-2"
            name="select"
            value={noteDetails.color}
            onChange={(e) =>
              dispatch(updateNote(noteDetails.id, "color", e.target.value))
            }
          >
            <option>warning</option>
            <option>info</option>
            <option>danger</option>
            <option>primary</option>
            <option>success</option>
          </Input>
          <h4 className="mt-4">Edit Note</h4>
          <Input
            type="textarea"
            id="title"
            name="title"
            rows="5"
            value={noteDetails.title}
            onChange={(e) =>
              dispatch(updateNote(noteDetails.id, "title", e.target.value))
            }
          />
        </div>
      ) : (
        <div className="d-flex mt-3 p-4 flex-column align-items-center justify-content-center">
          <i className="ti-agenda display-5"></i>
          <h4 className="mt-2">Please select a Note or Add Note.</h4>
        </div>
      )}
    </Fragment>
  );
};

export default NoteContent;
