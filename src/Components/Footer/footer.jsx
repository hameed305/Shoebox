import React from 'react'
import "./footer.css"

const footer = () => {
  return (
    <footer>
      <section>
        <div className="fot-box">
          <a href="/Kids">Kids</a>
          <a href="/Women">Women</a>
          <a href="/Men">Men</a>
        </div>
        <div className="fot-box">
          <a href="/Terms-of-Services">Terms of Service</a>
          <a href="/Disclaimer">Disclaimer</a>
          <a href="/Privacy-Policy">Privacy Policy</a>
        </div>
        <div className="fot-box .fotmed">
          <p>FOLLOW US ON :</p>
          <div className="media">
            <span onClick={(function(){location.href="https://www.behance.net"})} className="bi-behance"></span>
            <span onClick={(function(){location.href="https://www.instagram.com"})} className="bi-instagram"></span>
            <span onClick={(function(){location.href="https://www.linkedin.com"})} className="bi-linkedin"></span>
            <span onClick={(function(){location.href="https://www.dribbble.com"})} className="bi-dribbble"></span>
            <span onClick={(function(){location.href="https://www.youtube.com"})} className="bi-youtube"></span>
          </div>
          <p>be touch with us and get the latest <br /> updates of kvt fashion store</p>
        </div>
      </section>
      <p id="footer_copy_title"> &copy;Copyright | www.shoebox.com | All Rights Reserved</p>
    </footer>
  )
}

export default footer