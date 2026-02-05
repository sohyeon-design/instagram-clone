import React from 'react';
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';

function App() {
  const posts = [
    {
      id: 1,
      username: 'ham_user',
      profileImg: '/ham_01.jpg',
      postImg: '/insta_01.jpg',
      likes: 245,
      caption: '멋진 하루! ☀️',
      timestamp: '2시간 전'
    },
    {
      id: 2,
      username: 'foodie_ham',
      profileImg: '/ham_02.jpg',
      postImg: '/insta_02.jpg',
      likes: 189,
      caption: '오늘의 기록 📸',
      timestamp: '5시간 전'
    },
    {
      id: 3,
      username: 'ham_user',
      profileImg: '/ham_01.jpg',
      postImg: '/insta_03.jpg',
      likes: 312,
      caption: '좋은 추억 💫',
      timestamp: '8시간 전'
    },
    {
      id: 4,
      username: 'foodie_ham',
      profileImg: '/ham_02.jpg',
      postImg: '/insta_04.jpg',
      likes: 156,
      caption: '행복한 순간 ✨',
      timestamp: '12시간 전'
    },
    {
      id: 5,
      username: 'ham_user',
      profileImg: '/ham_01.jpg',
      postImg: '/insta_05.jpg',
      likes: 423,
      caption: '힐링 타임 🌿',
      timestamp: '1일 전'
    },
    {
      id: 6,
      username: 'foodie_ham',
      profileImg: '/ham_02.jpg',
      postImg: '/insta_06.jpg',
      likes: 267,
      caption: '특별한 날 🎉',
      timestamp: '1일 전'
    }
  ];

  return (
    <div className="app">
      <Header />
      <Feed posts={posts} />
    </div>
  );
}

export default App;
