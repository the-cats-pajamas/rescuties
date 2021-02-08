import React, { useState, Fragment } from "react";

import ContactsFilter from "../../components/contacts/ContactsFilter";
import ContactsSearch from "../../components/contacts/ContactsSearch";
import ContactsList from "../../components/contacts/ContactsList";
import ContactsDetails from "../../components/contacts/ContactsDetails";

export default () => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setshowRight] = useState(false);

  const showLeftPart = () => {
    setShowLeft(!showLeft);
  };

  const showRightPart = () => {
    setshowRight(!showRight);
  };

  return (
    <Fragment>
      <div className="app-drawer">
        <div
          className={
            "left-part bg-white " + (showLeft === true ? "show-panel" : "")
          }
        >
          <ContactsFilter />
        </div>
        <div className="right-part bg-white app-drawer-content">
          <div
            className={
              "right-left-part " +
              (showRight === true ? "show-right-left-panel" : "")
            }
          >
            <span
              onClick={showLeftPart.bind(null)}
              className={
                "bg-primary show-left-part text-white d-block d-lg-none " +
                (showLeft === true ? "left-part-open" : "")
              }
            >
              <i
                className={
                  showLeft === true
                    ? "fas fa-chevron-left"
                    : "fas fa-chevron-right"
                }
              ></i>
            </span>
            <ContactsSearch />
            <ContactsList showRightPart={showRightPart.bind(null)} />
          </div>
          <div
            className={
              "right-right-part " +
              (showRight === true
                ? "show-right-right-panel"
                : "hide-right-right-part")
            }
          >
            <span
              onClick={() => {
                showRightPart();
              }}
              className={
                "hide-right-right-part d-block d-md-none " +
                (showRight === true ? "right-right-part-open" : "")
              }
            >
              <i className="fas fa-times"></i>
            </span>
            <ContactsDetails />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
