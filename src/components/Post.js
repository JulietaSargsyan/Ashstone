import React from 'react';

function Post({ handlePostClick, post }) {
  return (
    <div className='post' onClick={() => handlePostClick(post)}>
        <img src={post.img} srcSet={`${post.img_2x} 2x`} alt="postImage" />
        <p className='post__categ'>{post.tags}</p>
        <h3 className='post__title'>{post.title}</h3>
        <div className='post__meta'>
            <p className='post__author'>{post.autor}</p>
            <span className="icon-Oval"></span>
            <p className='post__date'>{post.date}</p>
            <span className="icon-Oval"></span>
            <p className="post__views">{post.views}</p>
        </div>
        <p className="post__description">{post.text}</p>
    </div>
  )
}

export default Post;