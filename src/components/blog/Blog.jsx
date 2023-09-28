import React from "react"
import Back from "../common/Back"
import "../home/recent/recent.css"
import img from "../images/civilwork.jpeg"
import BlogHome from "./Bloghome"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          <BlogHome />
        </div>
      </section>
    </>
  )
}


export default Blog
