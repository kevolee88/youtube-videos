import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <div className=" image">
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      </div>
      <div className="content">
        <p className="header">{video.snippet.title}</p>
      </div>
    </div>
  )
};

export default VideoItem;
