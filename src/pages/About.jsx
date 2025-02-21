import React from 'react'
import "../assets/styles/about.css"
const About = () => {
  return (
    <>
      <div className="about_hero flex flex-col items-center justify-center text-white gap-8">
        <h1>ABOUT US</h1>
        <p>SHOEBOX.COM is an ecommerce online shop<br />Developed by <span className='bg-violet-500 p-1 rounded-lg border border-violet-400'>Naeem Khan</span>
        </p>
        <div class="logo_container">
          <img src="/logo.png" alt="logo" />
          <h2>SHOEBOX.COM</h2>
        </div>
      </div>


      <div className='about_container'>

        <div class="details">
          <h1 class="title">ABOUT ME</h1>
          <p>NAME : Naeem khan</p>
          <p>OCCUPATION : WEB DEVELOPER AND Graphic designer</p>
          <p>LOCATION : Quetta , balochistan Pakistan</p>
          <p>LANGUAGE : URDU , ENGLISH , ARABIC , PERSIAN,FRENCH</p>
          <h2>COMPUTER SKILLS :</h2>

          <div class="courses">

            <div class="c_box">
              <span>WEB DESIGNING</span>
              <div>
                <div class="span"></div>
              </div>
            </div>

            <div class="c_box">
              <span>WEB DEVELOPMENT</span>
              <div>
                <div class="span"></div>
              </div>
            </div>

            <div class="c_box">
              <span>LOGO DESIGNING</span>
              <div>
                <div class="span"></div>
              </div>
            </div>

            <div class="c_box">
              <span>VIDEO EDITING</span>
              <div>
                <div class="span"></div>
              </div>
            </div>
          </div>

        </div>

        <div class="img">

          <div class="img_box">
            {/* image has been set in bg  */}
          </div>
          <h3>HAMEED JAN</h3>
          <p>THE OWNER</p>
          <div class="media_container">
            <a href="">
              <img src="../src/assets/Img/Png/Facebook.png" alt="facebook" />
            </a>
            <a href="">
              <img src="../src/assets/Img/Png/Instagram.png" alt="Instagram" />
            </a>
            <a href="">
              <img src="../src/assets/Img/Png/Whatsapp.png" alt="whatsapp" />
            </a>
          </div>
        </div>

      </div>


      <div className='.about_section'>

        <h1 class="title">ABOUT SHOEBOX.COM</h1>
        <pre>"Welcome to SHOEBOX.COM, your trusted source for product recommendations and reviews! I'm HAMEED JAN, a passionate online marketer and affiliate marketer with a mission to help you find the best products for your needs.

          With years of experience in the online marketing space, I've learned what makes a product stand out from the crowd. I've scoured the web to bring you the most comprehensive and unbiased reviews, so you can make informed purchasing decisions.

          As an Amazon affiliate, I earn a commission for each purchase made through my affiliate links. But don't worry – my goal is to provide you with the most valuable information, not to push you into buying something you don't need.

          On this website, you'll find in-depth product reviews, roundups, and comparisons to help you navigate the vast online marketplace. Whether you're looking for tech gadgets, home goods, or outdoor gear, I've got you covered.

          Thanks for your shopping journey.
        </pre>
      </div>


      <div class=".about_shop">
        <h1 class="title">
          LET'S DO THE SHOPPING
        </h1>
        <pre>"Welcome to SHOEBOX.COM, your trusted source for product recommendations and reviews! I'm HAMEED JAN, a passionate online marketer and affiliate marketer with a mission to help you find the best products for your needs.

          With years of experience in the online marketing space, I've learned what makes a product stand out from the crowd. I've scoured the web to bring you the most comprehensive and unbiased reviews, so you can make informed purchasing decisions.

          As an Amazon affiliate, I earn a commission for each purchase made through my affiliate links. But don't worry – my goal is to provide you with the most valuable information, not to push you into buying something you don't need.

          <div class="flex items-center justify-center gap-4 flex-wrap">
            <img width={300} className='rounded-lg' src="../src/assets/Img/Blog/blog_1.jpg" alt="nike" />
            <img width={300} className='rounded-lg' src="../src/assets/Img/Blog/blog_2.jpg" alt="addidas" />
            <img width={300} className='rounded-lg' src="../src/assets/Img/Blog/blog_3.jpeg" alt="airmax" />
          </div>

          On this website, you'll find in-depth product reviews, roundups, and comparisons to help you navigate the vast online marketplace. Whether you're looking for tech gadgets, home goods, or outdoor gear, I've got you covered.

          Thanks for your shopping journey.
        </pre>
      </div>


    </>
  )
}

export default About