import React from 'react';
import { PropTypes } from 'prop-types';

class TopicComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const {
      match,
    } = this.props;

    return (
      <div>论题【{match.params.topicId}】</div>
    );
  }
}

TopicComponent.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TopicComponent;
