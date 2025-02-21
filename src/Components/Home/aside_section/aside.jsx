import React from 'react'
import "./aside.css"

const aside = () => {
  return (
    <aside>
    <div className="aside-box">
        <span id="colored_title">Save</span>
        <p>With new hot deal<br/>offer</p>
        <div className="new_price">
            <strike id="strike">$100</strike>
            <p>$80</p>
        </div>
        <a href="#">CHECK OUT</a>
    </div>
    <div className="aside_circle"></div>
    <img src="src/assets/Img/Store/aside_section_img.png" alt="img"/>
</aside>


  )
}

export default aside