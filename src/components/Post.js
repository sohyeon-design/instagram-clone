import React, { useState } from 'react';
import './Post.css';

function Post({ username, profileImg, postImg, likes, caption, timestamp }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, { text: comment, username: 'you' }]);
      setComment('');
    }
  };

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerLeft">
          <img
            src={profileImg}
            alt={username}
            className="post__avatar"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/40';
            }}
          />
          <h3>{username}</h3>
        </div>
        <span className="post__options">•••</span>
      </div>

      <img
        src={postImg}
        alt="Post"
        className="post__image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/600';
        }}
      />

      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <svg 
              className={`icon ${liked ? 'liked' : ''}`} 
              onClick={handleLike}
              viewBox="0 0 24 24"
            >
              {liked ? (
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" 
                  fill="#ed4956"
                ></path>
              ) : (
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,7.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-4.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
                  fill="currentColor"
                ></path>
              )}
            </svg>
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <svg className="icon" viewBox="0 0 24 24">
              <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
              <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
            </svg>
          </div>
          <svg className="icon" viewBox="0 0 24 24">
            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
          </svg>
        </div>

        <div className="post__likes">
          <strong>좋아요 {likeCount.toLocaleString()}개</strong>
        </div>

        <div className="post__caption">
          <strong>{username}</strong> {caption}
        </div>

        {comments.length > 0 && (
          <div className="post__comments">
            {comments.map((c, index) => (
              <div key={index} className="post__comment">
                <strong>{c.username}</strong> {c.text}
              </div>
            ))}
          </div>
        )}

        <div className="post__timestamp">{timestamp}</div>

        <form className="post__commentBox" onSubmit={handleComment}>
          <input
            type="text"
            className="post__input"
            placeholder="댓글 달기..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            className="post__button"
            disabled={!comment.trim()}
          >
            게시
          </button>
        </form>
      </div>
    </div>
  );
}

export default Post;
