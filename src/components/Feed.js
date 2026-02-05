import React from 'react';
import Stories from './Stories';
import Post from './Post';
import './Feed.css';

function Feed({ posts }) {
  return (
    <div className="feed">
      <Stories />
      {posts.map(post => (
        <Post
          key={post.id}
          username={post.username}
          profileImg={post.profileImg}
          postImg={post.postImg}
          likes={post.likes}
          caption={post.caption}
          timestamp={post.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
