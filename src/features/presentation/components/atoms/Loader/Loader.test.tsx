import React from 'react';
import { render } from '@testing-library/react-native';
import Loader from './index';

it('loader should be accessible on screen', () => {
  const { queryByAccessibilityHint } = render(
    <Loader accessibilityHint={'loading'} />,
  );
  expect(queryByAccessibilityHint('loading')).not.toBeNull();
});
