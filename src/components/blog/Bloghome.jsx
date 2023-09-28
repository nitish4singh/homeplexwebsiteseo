import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import './blogcss.css';

const BlogHome = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/blogs/allBlogs`);
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit) + "...";
  };

  return (
    <div className="home1">
      <div className="posts1">
        {posts.map((post) => (
          <div className="post1" key={post.url}>
            <div className="img">
              <img src={post.imgUrl1} alt="" />
            </div>
            <div className="content1">
              <Link className="link1" to={`/post/${(post.url)}`}>
                <div className="title">{post.title}</div>
              </Link>
              <p>{truncateText(getText(post.desci), 50)}</p>
              <Link className="read-more1" to={`/post/${(post.url)}`}>
                Read More
              </Link>
            </div>
          </div>
        ))} 

      </div>
    </div>
  );
};

export default BlogHome;
