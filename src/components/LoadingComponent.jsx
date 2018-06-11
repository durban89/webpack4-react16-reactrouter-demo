import React, { Component } from 'react';

class LoadingComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div>Loading......</div>
    );
  }
}

export default LoadingComponent;
