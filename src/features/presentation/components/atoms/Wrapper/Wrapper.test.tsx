import React from 'react';
import { Text } from 'react-native';

import { render } from '@testing-library/react-native';
import Wrapper from './index';

test('should be one children present in container', () => {
  const { toJSON } = render(
    <Wrapper testID="Wrapper">
      <Text>test</Text>
    </Wrapper>,
  );
  expect(toJSON()?.children.length).toBe(1);
});
