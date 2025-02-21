import React from 'react'
import "./article.css"
import { useState } from 'react'

const article = () => {
    const [bg_img,set_bg_img]=useState("src/assets/Img/article_card/multycolorshoe.png")
    const [circles,setcircle]=useState("linear-gradient(to left,rgb(22, 173, 255),rgb(179, 66, 255))")
    const [p_title,set_p_title]=useState("Your Desire Colors")
    const [bg,setbg]=useState(" linear-gradient(to left,rgb(22, 173, 255),rgb(179, 66, 255))")


  return (
    
    <article id="redirect-popular" style={{background:bg}}>
    <div className="article_circle_1" style={{background:circles}} ></div>
    <div className="article_circle_2" style={{background:circles}} ></div>

    <div className="article_img">
        <img src={bg_img} alt="img"/>
        <h1>| NEW MASTER CLASS</h1>
    </div>
    <div className="article_card">
        <h2>choose your color</h2>
        <div className="article_color_box">
            <span id="article_color_1" onClick={(()=>{
                set_bg_img("src/assets/Img/article_card/red shoe.png")
                setcircle("red")
                set_p_title("Dark Thunder")
                setbg("rgb(200, 0, 0)")
            })}></span>
            <span id="article_color_2" onClick={(()=>{
                set_bg_img("src/assets/Img/article_card/brown shoe.png")
                setcircle("rgb(125, 78, 78)")
                set_p_title("Hard Wood")
                setbg("rgb(200,150,150)")
            })}></span>
            <span id="article_color_3" onClick={(()=>{
                set_bg_img("src/assets/Img/article_card/blue shoe.png")
                setcircle("skyblue")
                set_p_title("Blue Sky Rider")
                setbg("rgb(0, 150, 200)")
            })}></span>
            <span id="article_color_4" onClick={(()=>{
                set_bg_img("src/assets/Img/article_card/orange shoe.png")
                setcircle("rgb(255, 123, 0)")
                set_p_title("Sweet Orange")
                setbg("rgb(255, 171, 76)")
            })}></span>
        </div>
        <h1>| {p_title}</h1>
        <p>The Top Collection For Your Dream</p>
        <a href="#">ORDER NOW <span className="bi-arrow-right"></span></a>
    </div>

</article>

  )
}

export default article