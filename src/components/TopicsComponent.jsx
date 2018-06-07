import React from 'react';
import { Link as ALink, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import TopicComponent from './TopicComponent';

class TopicsComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const {
      match,
    } = this.props;

    return (
      <div>
        <h2>论题</h2>
        <ul>
          <li>
            <ALink to={`${match.url}/1`}>论题1</ALink>
          </li>
          <li>
            <ALink to={`${match.url}/2`}>论题2</ALink>
          </li>
          <li>
            <ALink to={`${match.url}/3`}>论题3</ALink>
          </li>
          <li>
            <ALink to={`${match.url}/4`}>论题4</ALink>
          </li>
        </ul>

        <hr />
        <Route path={`${match.url}/:topicId`} component={TopicComponent} />
        <Route
          exact
          path={match.url}
          render={() => <h3>请选择一个感兴趣的论题.</h3>}
        />
      </div>
    );
  }
}

TopicsComponent.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TopicsComponent;
