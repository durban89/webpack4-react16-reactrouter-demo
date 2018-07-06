import React from 'react';
import renderer from 'react-test-renderer';
import ALink from '../components/Link.react';

it('正确的渲染', () => {
  const tree = renderer
    .create(<ALink page="https://www.walkerfree.com">Walkerfree</ALink>)
    .toJSON(); expect(tree).toMatchSnapshot();
});
