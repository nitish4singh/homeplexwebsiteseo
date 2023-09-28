import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";
const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/blogs/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);


  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  return (
    <div className="single">
      <div className="content">
        <img src={post?.imgUrl2} alt="" />
            <p>Posted {moment(post.date).fromNow()}</p>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desci),
          }}
        ></p></div>
          
    
      </div>
  
    
  );
};
export default Single;
