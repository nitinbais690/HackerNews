import useTopStories from 'hooks/useTopStories';
import Container, { ContainerVariant } from 'modules/Container';
import React from 'react';

import TopStoriesView from 'templates/TopStories';
import styles from './styles';

function TopStories() {
  const stories = useTopStories();
  return (
    <Container
      style={styles.container}
      edges={['top', 'left', 'right']}
      variant={ContainerVariant.WRAPPER_WITH_SAFE_AREA_VIEW}>
      <TopStoriesView {...stories} />
    </Container>
  );
}

export default TopStories;
