import React from 'react';

import VideoItem from './VideoItem';

const VideosList = ({ videos, onSelect }) => (
  <div className='ui relaxed divided list'>
    {videos.map(video => (
      <VideoItem onSelect={onSelect} key={video.id.videoId} video={video} />
    ))}
  </div>
);

export default VideosList;
