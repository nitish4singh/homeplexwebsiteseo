import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";

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
        // Handle the error (e.g., display an error message or redirect)
      }
    };
    fetchData();
  }, [postId]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="content">
          <img src={post?.imgUrl2} alt="" />
          <p>Posted {moment(post.date).fromNow()}</p>
          <h1>{post.title}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.desci),
            }}
          ></p>
        </div>
      )}
    </div>
  );
};

export default Single;
