import React from 'react';
import { Text } from 'react-native';

import { render } from '@testing-library/react-native';
import RowContainer from './index';

it('should be  one children present in RowContainer', async () => {
  const { queryByTestId } = render(
    <RowContainer testID="container">
      <Text>test</Text>
    </RowContainer>,
  );
  expect(await queryByTestId('container')).not.toBeNull();
});
