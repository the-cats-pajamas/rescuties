import React from 'react';
import PropTypes from 'prop-types';

class Newsdata extends React.Component {
  render() {
    const texttitle = (
      <h1 className="mb-0 font-light">{this.props.texttitle}</h1>
    );
    const textsubtitle = <small>{this.props.textsubtitle}</small>;
    return (
      <div>
        {texttitle}
        {textsubtitle}
      </div>
    );
  }
}

Newsdata.propTypes = {
  texttitle: PropTypes.string,
  textsubtitle: PropTypes.string
};

export default Newsdata;
