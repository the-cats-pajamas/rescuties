import React from "react";
import Email from "./EmailListItem";
import {
  EmailVisibilityFilters,
  openEmail,
  setSelectedEmail,
  starEmail,
  importantEmail,
} from "../../redux/email/Action";
import { useSelector, useDispatch } from "react-redux";

const EmailList = ({ showRightPart }) => {
  const getVisibleEmails = (emails, filter, emailSearch) => {
    switch (filter) {
      case EmailVisibilityFilters.SHOW_INBOX:
        return emails.filter(
          (t) =>
            t.inbox &&
            !t.trash &&
            t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
        );
      case EmailVisibilityFilters.SHOW_SENT:
        return emails.filter(
          (t) =>
            t.sent &&
            !t.trash &&
            t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
        );
      case EmailVisibilityFilters.SHOW_DRAFTS:
        return emails.filter(
          (t) =>
            t.draft &&
            !t.trash &&
            t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
        );
      case EmailVisibilityFilters.SHOW_SPAM:
        return emails.filter(
          (t) =>
            t.spam &&
            !t.trash &&
            t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
        );
      case EmailVisibilityFilters.SHOW_TRASH:
        return emails.filter(
          (t) =>
            t.trash &&
            t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
        );
      case EmailVisibilityFilters.SHOW_STARRED:
        return emails.filter(
          (t) =>
            t.starred &&
            !t.trash &&
            t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
        );
      case EmailVisibilityFilters.SHOW_IMPORTANT:
        return emails.filter(
          (t) =>
            t.important &&
            !t.trash &&
            t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
        );
      case EmailVisibilityFilters.SHOW_PROMOTIONAL:
        return emails.filter(
          (t) =>
            t.label === "Promotional" &&
            !t.trash &&
            t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
        );
      case EmailVisibilityFilters.SHOW_SOCIAL:
        return emails.filter(
          (t) =>
            t.label === "Social" &&
            !t.trash &&
            t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
        );
      case EmailVisibilityFilters.SHOW_HEALTH:
        return emails.filter(
          (t) =>
            t.label === "Health" &&
            !t.trash &&
            t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
        );
      default:
        throw new Error("Unknown filter: " + filter);
    }
  };

  const emails = getVisibleEmails(
    useSelector((state) => state.emailReducer.emails),
    useSelector((state) => state.emailReducer.visibilityFilter),
    useSelector((state) => state.emailReducer.emailSearch)
  );

  const active = useSelector((state) => state.emailReducer.emailContent);

  const dispatch = useDispatch();

  return (
    <ul className="list-group listing-email-over">
      {emails.map((email) => (
        <Email
          key={email.id}
          active={active}
          {...email}
          onClick={() => {
            dispatch(openEmail(email.id));
            showRightPart();
          }}
          onStar={() => dispatch(starEmail(email.id))}
          onImportant={() => dispatch(importantEmail(email.id))}
          onChange={(e) => {
            if (e.target.checked === true)
              dispatch(setSelectedEmail(email.id, "checked"));
            else dispatch(setSelectedEmail(email.id, "unchecked"));
          }}
        />
      ))}
    </ul>
  );
};

export default EmailList;
