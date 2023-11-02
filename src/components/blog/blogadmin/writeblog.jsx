import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import './writeblog.css';
import Back from "../../common/Back"
import "../../home/recent/recent.css"
import img from "../../images/civilwork.jpeg"
const Write = () => {
  const state = useLocation().state;
  const [title, setTitle] = useState(state?.title || "");
  const [url, setUrl] = useState(state?.url || "");
  const [desci, setDecri] = useState(state?.desci || "");
  const [imgUrl1, setImgUrl1] = useState(state?.imgUrl1 || "");
  const [imgUrl2, setImgUrl2] = useState(state?.imgUrl2 || "");
  const [cat, setCat] = useState(state?.cat || "");
  const navigate = useNavigate();
  const API1 = "https://homeplexapi.homeplexnepal.com/api/blogs/addBlog";
  const API2 = "https://homeplexapi.homeplexnepal.com/api/blogs/";
  const handleClick = async (e) => {
    e.preventDefault();
       try {
      state
        ? await axios.put(`${API2}${state.id}`, {
            title:title,
            desci: desci,
            url:url,
            cat,
            imgUrl1,
            imgUrl2,
      
          })
        : await axios.post(`${API1}`, {
            title:title,
            desci: desci,
            url:url,
            cat,
            imgUrl1,
            imgUrl2,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  }; 
  return (
<>
<section className='blog-out mb'>
  
{/* <Back name='WriteBlog' title='Write a blog' cover={img} /> */}

    <div className="addblog">
      <div className="blogcontent">
      <input
  type="text"
  placeholder="BlogUrl"
  value={url}
  onChange={(e) => setUrl(e.target.value)}
/>

<input
  type="text"
  placeholder="Title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={desci}
            onChange={setDecri}
          />
        </div>

        <input
          type="text"
          placeholder="Image Url1"
          value={imgUrl1}
          onChange={(e) => setImgUrl1(e.target.value)}
                  />
<input
          type="text"
          placeholder="Image Url2"
          value={imgUrl2}
          onChange={(e) => setImgUrl2(e.target.value)}
                  />
      </div>
      <div className="menu">

        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "all"}
              name="cat"
              value="all"
              id="all"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="all">All</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "construction"}
              name="cat"
              value="construction"
              id="construction"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="construction">Construction</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "plumber"}
              name="cat"
              value="plumber"
              id="plumber"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="plumber">Plumber</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "electricity"}
              name="cat"
              value="electricity"
              id="electricity"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="electricity">Electricity</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "interiorDesign"}
              name="cat"
              value="interiorDesign"
              id="interiorDesign"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="interiorDesign">InteriorDesign</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "gharnaksha"}
              name="cat"
              value="gharnaksha"
              id="gharnaksha"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="gharnaksha">Gharnaksha</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "painting"}
              name="cat"
              value="painting"
              id="painting"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="painting">Painting</label>
          </div>
        </div>
        <div className="item">
          <h1>Publish</h1>
          <div className="buttons">
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
      </div>
    </div>
    </section>
    
    </>
  );
};

export default Write;