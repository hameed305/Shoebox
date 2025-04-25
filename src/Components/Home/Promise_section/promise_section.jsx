import React from "react";
import "./promise_section.css";
import Deliverytruck from "/Assets/Img/Png/truck delivery.png";
import Payment from "/Assets/Img/Png/secure payment.png";
import Offer from "/Assets/Img/Png/offer.png";

const promise_section = () => {
  return (
    <div className="promise_section w-full text-1xl min-h-[90vh] flex items-center justify-around flex-wrap gap-4">
      <div className="promise_box flex items-center justify-center flex-col text-center bg-slate-700 bg-opacity-10 p-2 rounded-lg border dark:border-t-slate-700 border-slate-400">
        <img src={Deliverytruck} alt="img" />
        <h4>FREE FAST DELIVERY</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possims</p>
      </div>
      <div className="promise_box flex items-center justify-center flex-col text-center bg-slate-700 bg-opacity-10 p-2 rounded-lg border dark:border-t-slate-700 border-slate-400">
        <img src={Payment} alt="img" />
        <h4>100% SECURE PAYMENT</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possims</p>
      </div>
      <div className="promise_box flex items-center justify-center flex-col text-center bg-slate-700 bg-opacity-10 p-2 rounded-lg border dark:border-t-slate-700 border-slate-400">
        <img src={Offer} alt="img" />
        <h4>GET DAILY OFFERS</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possims</p>
      </div>
    </div>
  );
};

export default promise_section;
