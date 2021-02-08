import React from 'react';
import PropTypes from 'prop-types';

const RecentComment = (props) => {
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-2,3  && Widget Page                                          */
    /*--------------------------------------------------------------------------------*/
    const image = (
        <div className="p-2">
            <img
                src={props.image}
                alt="user"
                width="50"
                className="rounded-circle"
            />
        </div>
    );
    const badge = (
        <span className={'ml-2 badge badge-' + props.badgeColor}>
            {props.badge}
        </span>
    );
    const name = <h6 className="font-medium">{props.name}</h6>;
    const comment = <span className="mb-3 d-block">{props.comment}</span>;
    const date = <span className="text-muted">{props.date}</span>;
    return (
        <div className="d-flex flex-row comment-row mt-0">
            {image}
            <div className="comment-text w-100">
                {name}
                {comment}
                <div className="comment-footer">
                    {date}
                    {badge}
                    <span className="action-icons">
                        <a href="#pencil">
                            <i className="ti-pencil-alt" />
                        </a>
                        <a href="#check">
                            <i className="ti-check" />
                        </a>
                        <a href="#heart">
                            <i className="ti-heart" />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}

RecentComment.defaultProps = {
    badgeColor: 'primary'
};

RecentComment.propTypes = {
    badgeColor: PropTypes.oneOf([
        'primary',
        'success',
        'info',
        'danger',
        'warning',
        'orange',
        'cyan'
    ]),
    image: PropTypes.string,
    name: PropTypes.node,
    comment: PropTypes.node,
    date: PropTypes.node,
    badge: PropTypes.string
};

export default RecentComment;
