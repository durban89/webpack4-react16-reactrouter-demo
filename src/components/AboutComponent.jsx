import React from 'react';
import { PropTypes } from 'prop-types';
import { Route, Link as ALink } from 'react-router-dom';
import RoleComponent from './RoleComponent';

class AboutComponent extends React.Component {
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
        <h2>About</h2>

        <ul>
          <li>
            <ALink to={`${match.url}/you`}>你</ALink>
          </li>
          <li>
            <ALink to={`${match.url}/me`}>我</ALink>
          </li>
          <li>
            <ALink to={`${match.url}/him`}>他</ALink>
          </li>
        </ul>

        <Route path={`${match.url}/:role`} component={RoleComponent} />
        <Route
          exact
          path={match.url}
          render={() => <h3>选择一个角色.</h3>}
        />
      </div>
    );
  }
}

AboutComponent.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AboutComponent;
