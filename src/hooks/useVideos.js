import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = initialQuery => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    handleSearch(initialQuery);
  }, [initialQuery]);

  const handleSearch = async query => {
    try {
      const response = await youtube.get('/search', {
        params: {
          q: query
        }
      });

      setVideos(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return [videos, handleSearch];
};

export default useVideos;
