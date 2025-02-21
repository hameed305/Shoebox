import React from 'react'
import "./home_hero.css"

export const home_hero = () => {
  return (

    <div className="home flex items-center justify-around flex-wrap min-h-[90vh] w-full">

      <div className="hero_circle_one"></div>

      <div className="hero_circle_two"></div>

      <div className="home-text min-w[550px] flex  flex-col justify-center">

        <div className="text_box p-4 ">
          <span id="colored_title">NEW.</span>
          <h1>DAY WITH BEST NEW <br />OFFER</h1>
          <p>EXPLORE MODERN SHOES ON <br /> SHOEBOX <span>.COM</span></p>
        </div>
        <div className="btn_box">
          <a href="#" id="btn-first">EXPLORE NOW</a>
          <a href="#" id="btn-second"><span className="bi-amazon"></span>MAZON PAGE</a>
        </div>
      </div>

      <img src="/src/assets/Img/Store/hero_img.png" alt="img" />

    </div>

  )
}

export default home_hero