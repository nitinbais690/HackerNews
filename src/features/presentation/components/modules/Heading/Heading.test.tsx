import React from 'react';
import { render } from '@testing-library/react-native';
import Heading from './index';

it('heading must be render', () => {
  const { queryByTestId } = render(<Heading value="test" />);
  expect(queryByTestId('heading')).not.toBeNull();
});
