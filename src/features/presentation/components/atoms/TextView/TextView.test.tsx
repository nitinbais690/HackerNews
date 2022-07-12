import React from 'react';
import { render } from '@testing-library/react-native';
import TextView from './index';

it('"inside" text should be display in TextView', () => {
  const { queryByText } = render(<TextView value="inside" />);
  expect(queryByText('inside')).not.toBeNull();
});
