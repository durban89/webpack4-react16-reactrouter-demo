import React from 'react';
import { shallow } from 'enzyme';
import CheckboxWithLabelComponent from '../components/CheckboxWithLabelComponent';

test('CheckboxWithLabelComponent changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabelComponent labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});
