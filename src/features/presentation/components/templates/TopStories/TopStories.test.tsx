import React from 'react';
import { render } from '@testing-library/react-native';
import TopStoriesView from './index';
const mockDataStory = [
  {
    by: 'xyz',
    descendants: 12,
    id: 1,
    score: 23,
    time: 360,
    title: 'abc',
    type: 'stroy',
    url: 'https://google.com',
    kids: [1, 5, 6],
  },
  {
    by: 'wuv',
    descendants: 1,
    id: 2,
    score: 46,
    time: 3600,
    title: 'dgf',
    type: 'stroy',
    url: 'https://google.com',
    kids: [1, 8, 6],
  },
];

describe('render top stories list in list', () => {
  it('flatlist props must be match', async () => {
    const componentTree = render(<TopStoriesView stories={mockDataStory} />);
    expect(
      (await componentTree.findByTestId('topStoriesList')).props,
    ).toMatchObject({ data: mockDataStory });
  });
  it('number of render item equal to number of story', async () => {
    const componentTree = render(<TopStoriesView stories={mockDataStory} />);
    expect((await componentTree.findAllByTestId('storyItem')).length).toBe(
      mockDataStory.length,
    );
  });
});
