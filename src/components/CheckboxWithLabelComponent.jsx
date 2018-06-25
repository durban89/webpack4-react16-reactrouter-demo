import React from 'react';
import PropTypes from 'prop-types';

class CheckboxWithLabelComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isChecked: false,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    return (
      <label htmlFor="label">
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}

CheckboxWithLabelComponent.propTypes = {
  labelOn: PropTypes.string.isRequired,
  labelOff: PropTypes.string.isRequired,
};

export default CheckboxWithLabelComponent;
