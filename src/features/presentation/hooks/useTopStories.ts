import { fetchAllTopStories, fetchItem } from 'api/topstories';
import { Stories, StoriesIDType } from 'entities/story';
import { useEffect, useState } from 'react';
import { paginator } from 'utils/helpers';

function useTopStories() {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [storiesId, setStoriesId] = useState<StoriesIDType | undefined>(
    undefined,
  );
  const [stories, setStories] = useState<Stories>([]);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTopStoriesId() {
      try {
        const res = await fetchAllTopStories();
        setStoriesId(res.data);
      } catch (e) {
        setError(e as Error);
      }
    }
    getTopStoriesId();
  }, []);

  useEffect(() => {
    loadMore(1);
  }, [storiesId]);

  function loadMore(page: number) {
    if (storiesId && Array.isArray(storiesId)) {
      getTopStories(page);
    }
  }

  async function getTopStories(page: number) {
    const { data, totalPage } = paginator(storiesId as StoriesIDType, page);
    if (totalPage < page) {
      setIsLoadMore(false);
      return;
    }
    try {
      const storiesArray = await Promise.all(
        data.map(async id => {
          const res = await fetchItem(id);
          return res.data;
        }),
      );
      setStories(
        page == 1 ? storiesArray : [...(stories as Stories), ...storiesArray],
      );
      setLoading(false);
    } catch (e) {
      setError(e as Error);
    }
  }

  return { error, stories, loading, isLoadMore, loadMore };
}

export default useTopStories;
