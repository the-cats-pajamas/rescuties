import React from 'react';
import PropTypes from 'prop-types';

class Monthdata extends React.Component {
  render() {
    const image = <img src={this.props.image} alt="user" width="50" />;
    const username = (
      <h6 className="font-medium mb-0">{this.props.username}</h6>
    );
    const smtext = <small className="text-muted">{this.props.smtext}</small>;
    const templatename = <div>{this.props.templatename}</div>;
    const badge = (
      <span className={'badge badge-' + this.props.badgeColor}>
        {this.props.badge}
      </span>
    );
    const budget = <div>{this.props.budget}</div>;
    return (
      <tr>
        <td>
          <span className="round">{image}</span>
        </td>
        <td>
          {username}
          {smtext}
        </td>
        <td>{templatename}</td>
        <td>{badge}</td>
        <td>{budget}</td>
      </tr>
    );
  }
}

Monthdata.defaultProps = {
  badgeColor: 'primary'
};

Monthdata.propTypes = {
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
  username: PropTypes.string,
  smtext: PropTypes.string,
  templatename: PropTypes.string,
  badge: PropTypes.string,
  budget: PropTypes.string
};

export default Monthdata;
