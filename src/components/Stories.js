import React from 'react';
import './Stories.css';

function Stories() {
  const stories = [
    { id: 1, username: 'ham_user', profileImg: '/ham_01.jpg' },
    { id: 2, username: 'foodie_ham', profileImg: '/ham_02.jpg' },
  ];

  return (
    <div className="stories">
      <div className="stories__container">
        {stories.map(story => (
          <div key={story.id} className="story">
            <div className="story__avatar">
              <img
                src={story.profileImg}
                alt={story.username}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/56';
                }}
              />
            </div>
            <p className="story__username">{story.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
