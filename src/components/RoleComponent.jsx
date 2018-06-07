import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoleComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const {
      match,
    } = this.props;

    const {
      role,
    } = match.params;

    let name;
    if (role === 'you') {
      name = '你';
    } else if (role === 'me') {
      name = '我';
    } else if (role === 'him') {
      name = '他';
    }
    return (
      <div>关于 {name} 的故事</div>
    );
  }
}

RoleComponent.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RoleComponent;

