import React, {useEffect} from "react";
import Note from "./NoteListItem";
import { Nav } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { openNote, fetchNotes } from "../../redux/notes/Action";
import { deleteNote } from "../../redux/notes/Action";

const NoteList = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const filterNotes = (notes, noteSearch) => {
    if (noteSearch !== "")
      return notes.filter(
        (t) =>
          !t.deleted &&
          t.title
            .toLocaleLowerCase()
            .concat(" ")
            .includes(noteSearch.toLocaleLowerCase())
      );
    else return notes.filter((t) => !t.deleted);
  };

  const notes = useSelector((state) =>
    filterNotes(state.notesReducer.notes, state.notesReducer.noteSearch)
  );
  const active = useSelector((state) => state.notesReducer.noteContent);

  

  return (
    <Nav className="list-unstyled d-block mailbox chat-users">
      <div className="message-center" style={{ height: "calc(100vh - 274px)" }}>
        {notes && notes.length
          ? notes.map((note) => (
              <Note
                key={note.id}
                {...note}
                active={active}
                onClick={() => dispatch(openNote(note.id))}
                onDeleteClick={() => dispatch(deleteNote(note.id))}
                noteTitle={note.title}
                noteColor={note.color}
                noteDatef={new Date(note.datef).toLocaleDateString({
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                })}
              />
            ))
          : "no notes"}
      </div>
    </Nav>
  );
};

export default NoteList;
