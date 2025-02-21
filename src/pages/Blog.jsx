import React, { useState } from 'react'
import "../assets/styles/blog.css"
import Blog_card from '../Components/blog_card'
import Slider from '../Components/slider'
const Blog = () => {
  const [imagearrow,setarrow]=useState([
    "../src/assets/Img/Blog/blog_1.jpg",
    "../src/assets/Img/Blog/blog_2.jpg",
    "../src/assets/Img/Blog/blog_3.jpeg",
    "../src/assets/Img/Blog/blog_4.jpeg",
    "../src/assets/Img/Blog/blog_5.jpeg",
  ])
  return (
    <>
      <Slider images={imagearrow}/>
      <div className="main_container">

        {/* blog list has been started */}

        <h1 className="banner"><span></span>Blog Posts</h1>
        <p className='text-[var(--black-color)] pl-20'>Here we share our tips , best guide for your health for your kids and we speedup your life goal by the power of high quality best  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic molestiae dignissimos at natus, sunt illum repellendus asperiores, et mollitia qui incidunt id vitae. Error enim reiciendis, culpa repellat architecto corporis.</p>
        <div className="blog_container flex items-center justify-around flex-wrap gap-8 w-full my-8 p-2">

          <Blog_card
          img="../src/assets/Img/Blog/blog_1.jpg"
          date="2 oct 2023"
          read_time="2 hour read"
          title="New arrivals in the new city"
          detail="Lorem is the best thing int lkjalkds"
          />

          <Blog_card
          img="../src/assets/Img/Blog/blog_2.jpg"
          date="2 oct 2023"
          read_time="2 hour read"
          title="New arrivals in the new city"
          detail="Lorem is the best thing int lkjalkds"
          />

          <Blog_card
          img="../src/assets/Img/Blog/blog_3.jpeg"
          date="2 oct 2023"
          read_time="2 hour read"
          title="New arrivals in the new city"
          detail="Lorem is the best thing int lkjalkds"
          />

          <Blog_card
          img="../src/assets/Img/Blog/blog_4.jpeg"
          date="2 oct 2023"
          read_time="2 hour read"
          title="New arrivals in the new city"
          detail="Lorem is the best thing int lkjalkds"
          />

          <Blog_card
          img="../src/assets/Img/Blog/blog_5.jpeg"
          date="2 oct 2023"
          read_time="2 hour read"
          title="New arrivals in the new city"
          detail="Lorem is the best thing int lkjalkds"
          />

          <Blog_card
          img="../src/assets/Img/Blog/blog_6.jpeg"
          date="2 oct 2023"
          read_time="2 hour read"
          title="New arrivals in the new city"
          detail="Lorem is the best thing int lkjalkds"
          />

          <Blog_card
          img="../src/assets/Img/Blog/blog_7.jpeg"
          date="2 oct 2023"
          read_time="2 hour read"
          title="New arrivals in the new city"
          detail="Lorem is the best thing int lkjalkds"
          />

          <Blog_card
          img="../src/assets/Img/Blog/blog_8.jpg"
          date="2 oct 2023"
          read_time="2 hour read"
          title="New arrivals in the new city"
          detail="Lorem is the best thing int lkjalkds"
          />

          <Blog_card
          img="../src/assets/Img/Blog/blog_9.jpg"
          date="2 oct 2023"
          read_time="2 hour read"
          title="New arrivals in the new city"
          detail="Lorem is the best thing int lkjalkds"
          />

          <Blog_card
          img="../src/assets/Img/Blog/blog_10.jpeg"
          date="2 oct 2023"
          read_time="2 hour read"
          title="New arrivals in the new city"
          detail="Lorem is the best thing int lkjalkds"
          />

          <Blog_card
          img="../src/assets/Img/Blog/blog_11.jpg"
          date="2 oct 2023"
          read_time="2 hour read"
          title="New arrivals in the new city"
          detail="Lorem is the best thing int lkjalkds"
          />

          <Blog_card
          img="../src/assets/Img/Blog/blog_12.jpg"
          date="2 oct 2023"
          read_time="2 hour read"
          title="New arrivals in the new city"
          detail="Lorem is the best thing int lkjalkds"
          />

          <Blog_card
          img="../src/assets/Img/Blog/blog_13.jpeg"
          date="2 oct 2023"
          read_time="2 hour read"
          title="New arrivals in the new city"
          detail="Lorem is the best thing int lkjalkds"
          />

          <Blog_card
          img="../src/assets/Img/Blog/blog_14.jpeg"
          date="2 oct 2023"
          read_time="2 hour read"
          title="New arrivals in the new city"
          detail="Lorem is the best thing int lkjalkds"
          />

          <Blog_card
          img="../src/assets/Img/Blog/blog_15.jpg"
          date="2 oct 2023"
          read_time="2 hour read"
          title="New arrivals in the new city"
          detail="Lorem is the best thing int lkjalkds"
          />


        </div>

      </div>
    </>
  )
}

export default Blog