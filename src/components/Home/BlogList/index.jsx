import React from 'react';
import BlogItem from './BlogItem';
import './styles.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='container'>
      <div className='blogList-wrap'>
        {blogs.map((blog) => (
          <BlogItem blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
