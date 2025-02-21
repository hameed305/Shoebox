import React from 'react'

const blog_card = (props) => {
    return (
        <a href="/blog">
            <img src={props.img} alt="img" />
            <div><span>{props.date}</span> <span>{props.read_time}</span></div>
            <h1>{props.title}</h1>
            <p>{props.detail}...</p>
        </a>
    )
}

export default blog_card