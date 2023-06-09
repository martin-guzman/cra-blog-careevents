import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <>
      {blog ? (
        <div className='blog-wrap'>
          <h1>{blog.title} Template</h1>
          <p className='blog-date'>{blog.dateStart} to {blog.dateEnd}</p>

          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
          <p className='blog-desc'>{blog.contactInfo} {blog.contactName} {blog.contactEmail}
          </p>

          <Link className='button-secondary' to='/'>Return to Events List</Link>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
