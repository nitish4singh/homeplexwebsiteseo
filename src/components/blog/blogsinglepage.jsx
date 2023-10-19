import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";
import { Helmet } from "react-helmet";
import './blogcss.css';
const Single = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const API = "https://homeplexapi.homeplexnepal.com/api/blogs/";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API}${postId}`);
        setPost(res.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
       
      }
    };
    fetchData();
  }, [postId]);
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit) + "...";
  };
 
  return (
    <>
        <Helmet>
    <meta charset="utf-8" />
    <title>{`${post.title}`}</title>
    <meta
      name="description"
      content =  {`$${truncateText(getText(post.desci), 50)}`}
    />
    <meta 
      name="keywords"
      content= {`${post.title}`}
    />
  </Helmet>
    <div className="single">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="content1">
          <img src={post?.imgUrl2} alt="" />
          <p>Posted {moment(post.date).fromNow()}</p>
          <h1>{post.title}</h1> 
          <div className="content2">
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.desci),
            }}
          ></p>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Single;
