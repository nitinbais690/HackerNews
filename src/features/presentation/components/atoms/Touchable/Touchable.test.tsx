import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import Touchable from './index';

it('onPress should be called in Touchable', async () => {
  const mock = jest.fn();
  const component = render(
    <Touchable testID={'TouchableText'} onPress={mock} />,
  );
  fireEvent.press(await component.findByTestId('TouchableText'));
  expect(mock).toHaveBeenCalledTimes(1);
});
