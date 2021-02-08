import axios from "axios";
import {SELECTED_NOTES, SEARCH_NOTES, UPDATE_NOTE, DELETE_NOTE, ADD_NOTE, FETCH_NOTES_SUCCESS} from '../constants/';

export const fetchNotes = () => {
    return dispatch => {
      axios
        .get("/api/data/notes/NotesData")
        .then(response => {
          dispatch({
            type: FETCH_NOTES_SUCCESS,
            notes: response.data
          })
        })
        .catch(err => console.log(err + "action"))
    }
}

export const openNote = id => ({
	type : SELECTED_NOTES,
	id
})

export const noteSearch = (searchTerm) => ({
    type: SEARCH_NOTES,
    searchTerm
})
export const deleteNote = id => ({
    type: DELETE_NOTE,
    id
});
export const updateNote = (id, field, value) => ({
    type: UPDATE_NOTE,
    id: id,
    field: field,
    value: value
});


export const addNote = (id,title, color) => ({
	type: ADD_NOTE,
	id: id++,
	color:"danger",
	title: "This is new Note"	
});