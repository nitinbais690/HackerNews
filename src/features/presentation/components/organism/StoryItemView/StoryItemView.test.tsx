import { render } from '@testing-library/react-native';
import React from 'react';
import StoryItemView from './index';

it('Story item should be render', () => {
  const story = {
    by: 'xyz',
    descendants: 123,
    id: 1,
    score: 23,
    time: 273,
    title: 'abc',
    type: 'story',
    url: 'https://google.com',
    kids: [1, 23, 45],
  };
  const component = render(<StoryItemView item={story} />);
  expect(component.queryByTestId('time')).not.toBeNull();
  expect(component.queryByTestId('by')).not.toBeNull();
  expect(component.queryByTestId('title')).not.toBeNull();
});
