import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
  render() {
    const { children } = this.props;
    return <div className='container'>{children}</div>;
  }
}

Container.propTypes = {
  children: PropTypes.array,
};

export default Container;
