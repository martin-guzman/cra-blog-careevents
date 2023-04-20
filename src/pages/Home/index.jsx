import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Hero from '../../components/Home/Hero';
import { blogList } from '../../config/data';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);

  return (
    <div>
      <Hero />

      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
