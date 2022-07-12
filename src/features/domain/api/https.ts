import axios from 'axios';
import Config from 'react-native-config';

export default axios.create({
  baseURL: `${Config.BASE_URL}/${Config.HACKER_NEWS_API_VERSION}/`,
  headers: {
    'Content-type': 'application/json',
  },
});
