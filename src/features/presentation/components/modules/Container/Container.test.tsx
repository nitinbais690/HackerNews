import React from 'react';
import { render } from '@testing-library/react-native';
import Container from './index';
import { Text } from 'react-native';

it('heading must be render', () => {
  const { queryByTestId } = render(
    <Container>
      <Text>test</Text>
    </Container>,
  );
  expect(queryByTestId('container')).not.toBeNull();
});
