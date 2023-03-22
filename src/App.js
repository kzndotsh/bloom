import React, { useState } from 'react';
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState('');

  const likePost = (postId) => {
    const updatedPost = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      } else {
        return post;
      }
    });
    setPosts(updatedPost);
  };

  const getFilteredPosts = () => {
    const termNormalized = searchTerm.trim().toLowerCase();
    if (!termNormalized) return posts;
    return posts.filter((post) => {
      return post.username.toLowerCase().includes(termNormalized);
    });
  };

  return (
    <div className='App'>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Posts posts={getFilteredPosts()} likePost={likePost} />
    </div>
  );
};

export default App;
