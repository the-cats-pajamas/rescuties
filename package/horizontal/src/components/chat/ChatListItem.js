import React from "react";
import { NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

const ChatListItem = ({ onClick, contactName, chatExcerpt, thumb, status }) => (
    <NavItem onClick={onClick}>
        <span className="message-item">
            <span className="user-img">
                <img src={thumb} alt="user" className="rounded-circle" width="" />
                <span className={`profile-status pull-right ${status}`}></span>
            </span>
            <div className="mail-contnet">
                <h5 className="message-title">{contactName}</h5>
                <span className="mail-desc">{chatExcerpt}</span>
            </div>
        </span>
    </NavItem>
);

ChatListItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    contactName: PropTypes.string.isRequired,
    chatExcerpt: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
}

export default ChatListItem;
