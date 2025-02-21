import React from 'react'
import Home_hero from '../Components/Home/Home_hero_section/home_hero'
import Promise_section from "../Components/Home/Promise_section/promise_section"
import Store_card from "../Components/Home/store_card/store_card"
import Article_Dream from "../Components/Home/New_dream_article_section/article"
import Aside_section from "../Components/Home/aside_section/aside"
import Home_blog from "../Components/Home/home_blog_section/home_blog"
import H1_title from "../Components/h1_title"

const Home = () => {
  return (
    <>

      <Home_hero />

      <H1_title title="OUR PROMISE WITH YOU" />

      <Promise_section />

      <H1_title title="POPULAR ON SHOEBOX.COM" />

      <section className='w-full'>

        <div className='store flex items-center justify-around flex-wrap gap-4 w-full p-4'>

          <Store_card
            img_address="/src/assets/Img/Store/Products/1.png"
            brand_name="BLack Nike Shoe"
            price="40"
            link="/product-page"
          />

          <Store_card
            img_address="/src/assets/Img/Store/Products/2.png"
            brand_name="Blue Airmax"
            price="12"
            link="/product-page"
          />

          <Store_card
            img_address="/src/assets/Img/Store/Products/3.png"
            brand_name="Blue Sky Shoe"
            price="39"
            link="/product-page"
          />

          <Store_card
            img_address="/src/assets/Img/Store/Products/4.png"
            brand_name="Black White Shoe"
            price="45"
            link="/product-page"
          />

          <Store_card
            img_address="/src/assets/Img/Store/Products/5.png"
            brand_name="Dark Blue Shoe"
            price="50"
            link="/product-page"
          />

          <Store_card
            img_address="/src/assets/Img/Store/Products/6.png"
            brand_name="Black Red Dragon"
            price="35"
            link="/product-page"
          />

          <Store_card
            img_address="/src/assets/Img/Store/Products/7.png"
            brand_name="New Gray Shoe"
            price="13"
            link="/product-page"
          />

          <Store_card
            img_address="/src/assets/Img/Store/Products/8.png"
            brand_name="Blue Sea Shoe"
            price="15"
            link="/product-page"
          />

          <Store_card
            img_address="/src/assets/Img/Store/Products/9.png"
            brand_name="Orange Shoe"
            price="43"
            link="/product-page"
          />
        </div>

      </section>

      {/* hero_2 section */}



      <div className="hero_2 bg-center bg-cover bg-no-repeat object-cover bg-fixed rounded-2xl w-full min-h-dvh">

      </div>

      <H1_title title="CHOOSE YOUR WON DREAM" />

      <Article_Dream />

      <H1_title title="HOT DEAL ON THIS WEEK" />

      <Aside_section />

      <H1_title title="OUR LATEST BLOGS" />

      <Home_blog />


      <div className="footer_card">

        <img src="src/assets/Img/Png/copan.png" alt="img" />

        <div className="footer_card_box">

          <h1>Use the copan code</h1>

          <p>we have copan code for you use it and get the best discount</p>

        </div>

      </div>

    </>
  )
}

export default Home