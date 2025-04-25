import React from 'react'
import Home_hero from '../Components/Home/Home_hero_section/home_hero'
import Promise_section from "../Components/Home/Promise_section/promise_section"
import Store_card from "../Components/Home/store_card/store_card"
import Article_Dream from "../Components/Home/New_dream_article_section/article"
import Aside_section from "../Components/Home/aside_section/aside"
import H1_title from "../Components/h1_title"
import Token_img from "../Assets/Img/Png/copan.png"
import Store from "../Data/Store.json"
const Home = () => {
  return (
    <>

      <Home_hero />

      <H1_title title="OUR PROMISE WITH YOU" />

      <Promise_section />

      <H1_title title="POPULAR ON SHOEBOX.COM" />

      <section className='w-full'>

        <div className='store flex items-center justify-around flex-wrap gap-4 w-full p-4'>
          {
            Store.map((s, index) => {
              return (
                <Store_card
                  key={index}
                  img_address={s.img_address}
                  brand_name={s.brand_name}
                  price={s.price}
                  link={s.link}
                />
              )
            })
          }
        </div>

      </section>

      {/* hero_2 section */}



      <div className="hero_2 bg-center bg-cover bg-no-repeat object-cover bg-fixed rounded-2xl w-full min-h-dvh">

      </div>

      <H1_title title="CHOOSE YOUR WON DREAM" />

      <Article_Dream />

      <H1_title title="HOT DEAL ON THIS WEEK" />

      <Aside_section />


      <div className="footer_card">

        <img src={Token_img} alt="img" />
        <div className="footer_card_box">

          <h1>Use the copan code</h1>

          <p>we have copan code for you use it and get the best discount</p>

        </div>

      </div>

    </>
  )
}

export default Home