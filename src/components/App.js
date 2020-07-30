import './App.css';

import React, { useEffect, useState } from 'react';

import SearchBar from './SearchBar';
import VideosList from './VideosList';
import VideoDetail from './VideoDetails';

import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, handleSearch] = useVideos('google');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className='ui container'>
      <SearchBar onSearch={handleSearch} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideosList onSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
