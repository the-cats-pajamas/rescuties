import React from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";

const Email = ({
  id,
  active,
  onClick,
  onChange,
  onStar,
  onImportant,
  from,
  emailExcerpt,
  time,
  label,
  starred,
  important,
}) => (
  <li
    className={
      "list-group-item p-3 border-bottom " + (active === id ? "bg-light" : "")
    }
  >
    <Row>
      <Col xs={1}>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            id={"check" + id}
            className="custom-control-input"
            onChange={onChange}
          />
          <label className="custom-control-label" htmlFor={"check" + id}>
            {" "}
          </label>
        </div>
      </Col>
      <Col xs={10} onClick={onClick}>
        <h6 className="font-bold mb-1 mt-1">{from}</h6>
        <div>
          <p className="text-truncate w-100 mb-0">{emailExcerpt}</p>
          <div className="mt-2 d-flex align-items-center">
            <div className="mr-2">
              <span
                className={
                  "badge " +
                  (label === "Promotional" ? "badge-warning" : "") +
                  (label === "Social" ? "badge-success" : "") +
                  (label === "Health" ? "badge-danger" : "")
                }
              >
                {label}
              </span>
            </div>
            <div className="">
              <span className="d-flex ">
                <i
                  onClick={onStar}
                  className={
                    "font-14 mr-2 " + (starred ? "fas fa-star" : "far fa-star")
                  }
                  style={{ color: starred ? "#FFC107" : "#495057" }}
                ></i>
                <i
                  onClick={onImportant}
                  className={
                    "font-14 " +
                    (important ? "fas fa-bookmark" : "far fa-bookmark")
                  }
                  style={{ color: important ? "#FFC107" : "#495057" }}
                ></i>
              </span>
            </div>
            <div className="ml-auto">
              <span className="text-muted font-12">{time}</span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </li>
);

Email.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onStar: PropTypes.func.isRequired,
  onImportant: PropTypes.func.isRequired,
  from: PropTypes.string.isRequired,
  emailExcerpt: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  starred: PropTypes.bool.isRequired,
  important: PropTypes.bool.isRequired,
};

export default Email;
