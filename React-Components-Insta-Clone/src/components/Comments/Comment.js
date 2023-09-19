import React from 'react';

const Comment = (props) => {
  const { comment } = props;

  return (
    <div className='comment-text'>
      <span className='user'>{comment.username}</span>{' '}
      <span className='comment'>{comment.text}</span>
    </div>
  );
};

export default Comment;
