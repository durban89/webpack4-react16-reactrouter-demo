import React from 'react';
import PropTypes from 'prop-types';

class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

AppComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppComponent;
