import React from "react";
import { useSelector } from "react-redux";

const EmailContent = () => {
  const emailDetails = useSelector(
    (state) => state.emailReducer.emails[state.emailReducer.emailContent - 1]
  );

  return emailDetails ? (
    <div>
      <div className="card-body border-bottom">
        <h4 className="mb-0">
          {emailDetails.subject}
          <span
            className={
              "ml-1 badge " +
              (emailDetails.label === "Promotional" ? "badge-warning" : "") +
              (emailDetails.label === "Social" ? "badge-success" : "") +
              (emailDetails.label === "Health" ? "badge-danger" : "")
            }
          >
            {emailDetails.label}
          </span>
        </h4>
      </div>
      <div className="card-body border-bottom">
        <div className="d-flex align-items-center">
          <img
            src={emailDetails.thumbnail}
            alt="user"
            className="rounded-circle"
            width="45"
          />
          <div className="ml-2">
            <h5 className="mb-0 font-16 font-medium">{emailDetails.from}</h5>
            <span>to me</span>
          </div>
          <div className="ml-auto">
            <span>{emailDetails.time}</span>
          </div>
        </div>
      </div>
      <div
        className="card-body"
        dangerouslySetInnerHTML={{ __html: emailDetails.emailContent }}
      ></div>
    </div>
  ) : (
    <div className="d-flex h-100 p-4 flex-column align-items-center justify-content-center">
      <i className="far fa-envelope display-5"></i>
      <h4 className="mt-2">Please select an email to show details.</h4>
    </div>
  );
};

export default EmailContent;
