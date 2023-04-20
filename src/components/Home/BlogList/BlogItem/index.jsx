import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    dateStart,
    dateEnd,
    authorName,
    cover,
    category,
    id,
    contactInfo,
    contactName,
    contactEmail,
  },
}) => {
  return (
    <div className='event-card'>
      <h2>{title}</h2>
      <div className='event-dates'>{dateStart} to {dateEnd}</div>
      <p className='blogItem-desc'>{description}</p>
      <div className='container-event--buttons'>
        <Link className='button-primary' to="/donate">
          Donate
        </Link>
        <Link className='button-secondary' to={`/blog/${id}`}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;

// <img className='blogItem-cover' src={cover} alt='cover' />
// <Chip label={category} />