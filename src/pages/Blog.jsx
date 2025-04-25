import React, { useState } from "react";
import "../../public/styles/blog.css";
import Blog_card from "../Components/blog_card";
import Slider from "../Components/slider";
import Blogs from "../Data/Blog.json";
import blog_img_1 from "/Assets/Img/Blog/blog_1.jpg";
import blog_img_2 from "/Assets/Img/Blog/blog_2.jpg";
import blog_img_3 from "/Assets/Img/Blog/blog_3.jpeg";
import blog_img_4 from "/Assets/Img/Blog/blog_3.jpeg";
import blog_img_5 from "/Assets/Img/Blog/blog_3.jpeg";

const Blog = () => {
  const [imagearrow, setarrow] = useState([
    blog_img_1,
    blog_img_2,
    blog_img_3,
    blog_img_4,
    blog_img_5,
  ]);
  return (
    <>
      <Slider images={imagearrow} />
      <div className="main_container">
        {/* blog list has been started */}

        <h1 className="banner">
          <span></span>Blog Posts
        </h1>
        <p className="text-[var(--black-color)] pl-20">
          Here we share our tips , best guide for your health for your kids and
          we speedup your life goal by the power of high quality best Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Hic molestiae
          dignissimos at natus, sunt illum repellendus asperiores, et mollitia
          qui incidunt id vitae. Error enim reiciendis, culpa repellat
          architecto corporis.
        </p>
        <div className="blog_container flex items-center justify-around flex-wrap gap-8 w-full my-8 p-2">
          {Blogs.map((blog, index) => {
            return (
              <Blog_card
                key={index}
                img={blog.img}
                date={blog.date}
                read_time={blog.read_time}
                title={blog.title}
                detail={blog.details}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
