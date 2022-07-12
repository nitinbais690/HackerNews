import https from './https';

export const fetchAllTopStories = async () =>
  await https.get('topstories.json');
export const fetchItem = async (id: number) =>
  await https.get(`item/${id}.json`);
