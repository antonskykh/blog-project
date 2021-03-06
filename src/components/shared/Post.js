import React from 'react';

const Post = ({ item }) => {
  const { title, date, content } = item;

  return (
    <div className="card">
      <h5 className="card-title">{title || "No Title"}</h5>
      <p className="card-date">{date}</p>
      <p className="card-text">{content || "No Content"}</p>
    </div>
  )
}

export default Post;
