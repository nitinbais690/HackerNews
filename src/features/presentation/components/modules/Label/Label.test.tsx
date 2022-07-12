import React from 'react';
import { render } from '@testing-library/react-native';
import Label from './index';

it('displays the  text that pass into it.', () => {
  const { queryByTestId } = render(<Label value="test" testID="label" />);
  expect(queryByTestId('label')).not.toBeNull();
});
