import React from 'react'
import "./promise_section.css"

const promise_section = () => {
  return (

    <div className="promise_section w-full text-1xl min-h-[90vh] flex items-center justify-around flex-wrap gap-4">
      <div className="promise_box flex items-center justify-center flex-col text-center bg-slate-700 bg-opacity-10 p-2 rounded-lg border border-slate-400">
        <img src="/src/assets/Img/Png/truck delivery.png" alt="img" />
        <h4>FREE FAST DELIVERY</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possims</p>
      </div>
      <div className="promise_box flex items-center justify-center flex-col text-center bg-slate-700 bg-opacity-10 p-2 rounded-lg border border-slate-400">
        <img src="/src/assets/Img/Png/secure payment.png" alt="img" />
        <h4>100% SECURE PAYMENT</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possims</p>
      </div>
      <div className="promise_box flex items-center justify-center flex-col text-center bg-slate-700 bg-opacity-10 p-2 rounded-lg border border-slate-400">
        <img src="/src/assets/Img/Png/offer.png" alt="img" />
        <h4>GET DAILY OFFERS</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possims</p>
      </div>
    </div>

  )
}

export default promise_section