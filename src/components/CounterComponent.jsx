import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { counter } from 'Actions';

const {
  increment, decrement,
} = counter;

class CounterComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const {
      count,
    } = this.props;

    return (
      <div>
        <p>数值【Look hot reloader】: {count}</p>
        <button onClick={this.props.doIncrement}>+</button>
        <button onClick={this.props.doDecrement}>-</button>
      </div>
    );
  }
}

CounterComponent.propTypes = {
  count: PropTypes.number,
  doIncrement: PropTypes.func.isRequired,
  doDecrement: PropTypes.func.isRequired,
};

CounterComponent.defaultProps = {
  count: 0,
};

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  doIncrement: () => dispatch(increment()),
  doDecrement: () => dispatch(decrement()),
});


export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
