import React from "react";
import { NavItem } from "reactstrap";
import PropTypes from "prop-types";

const NoteListItem = ({
  onClick,
  id,
  active,
  noteTitle,
  noteColor,
  noteDatef,
  onDeleteClick,
}) => (
  <NavItem className={active === id ? "bg-light" : ""}>
    <span className="note-item">
      <div className="note-content" onClick={onClick}>
        <span className={`line-brd bg-${noteColor}`}></span>
        <h5 className="note-title">{noteTitle}</h5>
        <span className="note-date"> {noteDatef}</span>
      </div>
      <i
        onClick={onDeleteClick}
        className="fas fa-trash-alt deletenote ml-3"
      ></i>
    </span>
  </NavItem>
);

NoteListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  noteTitle: PropTypes.string.isRequired,
  noteDatef: PropTypes.string.isRequired,
  noteColor: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default NoteListItem;
