import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'reactstrap';

class FeedData extends React.Component {
  render() {
    const content = <span>{this.props.content}</span>;

    const button = (
      <Button
        className={'btn-circle text-white btn btn-' + this.props.buttoncolor}
      >
        <i className={'text-white ' + this.props.iconname} />
      </Button>
    );

    const smtext = (
      <span className="text-muted font-12 ml-auto">{this.props.smtext}</span>
    );
    return (
      /*--------------------------------------------------------------------------------*/
      /* Component Html                                                                 */
      /*--------------------------------------------------------------------------------*/
      <div className="d-flex align-items-center content p-2 mt-2">
        {button}
        <div className="ml-2 text-truncate content-text">{content}</div>
        {smtext}
      </div>
    );
  }
}

FeedData.defaultProps = {
  buttoncolor: 'primary'
};

FeedData.propTypes = {
  buttoncolor: PropTypes.oneOf([
    'primary',
    'success',
    'info',
    'danger',
    'warning',
    'inverse'
  ]),
  smtext: PropTypes.string,
  content: PropTypes.string,
  button: PropTypes.string
};

export default FeedData;
