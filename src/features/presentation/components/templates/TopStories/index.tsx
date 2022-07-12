import Loader from 'atoms/Loader';
import { Stories, StoryItem } from 'entities/story';
import Container, { ContainerVariant } from 'modules/Container';
import Heading, { HeadingVariant } from 'modules/Heading';
import StoryItemView, { StoryItemViewProps } from 'organism/StoryItemView';
import React, { useState, useCallback } from 'react';

import { FlatList } from 'react-native';

type TopStoriesViewProps = {
  stories: Stories;
  loadMore?: (page: number) => void;
  loading?: boolean;
  isLoadMore?: boolean;
};

function TopStoriesView({
  stories,
  loadMore,
  loading,
  isLoadMore,
}: TopStoriesViewProps) {
  const [page, setPage] = useState(1);
  const [isLoadingMore, setLoadMore] = useState(false);

  const onLoadMore = useCallback(() => {
    if (isLoadMore) {
      setPage(page + 1);
      loadMore?.(page + 1);
      setLoadMore(true);
    }
  }, [isLoadMore, page]);

  const renderEmptyItem = useCallback(
    () => (
      <Container variant={ContainerVariant.CENTER_WRAPPER}>
        {loading ? (
          <Loader />
        ) : (
          <Heading variant={HeadingVariant.CENTER} value={'No Data Found'} />
        )}
      </Container>
    ),
    [loading],
  );

  const renderItem = (data: StoryItemViewProps) => (
    <StoryItemView testID="storyItem" {...data} />
  );

  const renderHeader = () => (
    <Heading value="Top Stories" variant={HeadingVariant.CENTER} />
  );

  const renderFooter = () => (isLoadingMore ? <Loader /> : null);

  return (
    <FlatList<StoryItem>
      data={stories}
      testID="topStoriesList"
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      ListEmptyComponent={renderEmptyItem}
      ListFooterComponent={renderFooter}
      onEndReached={onLoadMore}
    />
  );
}

export default TopStoriesView;
