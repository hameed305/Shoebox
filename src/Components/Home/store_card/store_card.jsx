import React from 'react'
import "./store_card.css"

const store_card = (props) => {
    return (
        <div className='flex items-center justify-center flex-col gap-2 rounded-2xl relative w-[300px] h-[320px] px-8 py-4'>
            <img src={props.img_address} alt="img" className='w-[200px]'/>
            <p>{props.brand_name}</p>
            <b className='text-green-600'>Price : {props.price} $</b>
            <a href={props.link}>CHECK OUT</a>
        </div>
    )
}

export default store_card