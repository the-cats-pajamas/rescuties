import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  trashEmail,
  assignFolder,
  assignLabel,
} from "../../redux/email/Action";
import { useSelector, useDispatch } from "react-redux";

const EmailActions = () => {
  const [folderDpOpen, setFolderDpOpen] = useState(false);
  const [labelDpOpen, setLabelDpOpen] = useState(false);

  const folderDptoggle = () => {
    setFolderDpOpen(!folderDpOpen);
  };

  const labelDptoggle = () => {
    setLabelDpOpen(!labelDpOpen);
  };

  const id = useSelector((state) => state.emailReducer.selectedEmail);

  const dispatch = useDispatch();

  return (
    <div className="bg-light px-3 pb-3 border-bottom">
      <div className="d-flex" role="group">
        <button
          type="button"
          className="btn btn-outline-secondary w-100"
          onClick={() => dispatch(trashEmail(id))}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <div className="w-100">
          <div className="btn-group w-100" role="group">
            <Dropdown
              className="w-100"
              isOpen={folderDpOpen}
              toggle={folderDptoggle.bind(null)}
            >
              <DropdownToggle outline color="secondary" className="w-100">
                <i className="fas fa-folder"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => dispatch(assignFolder(id, "inbox"))}
                >
                  Inbox
                </DropdownItem>
                <DropdownItem
                  onClick={() => dispatch(assignFolder(id, "sent"))}
                >
                  Sent
                </DropdownItem>
                <DropdownItem
                  onClick={() => dispatch(assignFolder(id, "draft"))}
                >
                  Draft
                </DropdownItem>
                <DropdownItem
                  onClick={() => dispatch(assignFolder(id, "spam"))}
                >
                  Spam
                </DropdownItem>
                <DropdownItem
                  onClick={() => dispatch(assignFolder(id, "trash"))}
                >
                  Trash
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="w-100">
          <div className="btn-group w-100" role="group">
            <Dropdown
              className="w-100"
              isOpen={labelDpOpen}
              toggle={labelDptoggle.bind(null)}
            >
              <DropdownToggle outline color="secondary" className="w-100">
                <i className="fas fa-tags"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => dispatch(assignLabel(id, "Promotional"))}
                >
                  Promotional
                </DropdownItem>
                <DropdownItem
                  onClick={() => dispatch(assignLabel(id, "Social"))}
                >
                  Social
                </DropdownItem>
                <DropdownItem
                  onClick={() => dispatch(assignLabel(id, "Health"))}
                >
                  Health
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailActions;
