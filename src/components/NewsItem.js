import React from 'react'
import './NewsItem.css'

function NewsItem({ title, discription, imgUrl, url, author, date, source }) {
    return (
        <div className="card" >
            <img src={!imgUrl ? "https://i.pinimg.com/originals/a0/d1/1b/a0d11b3f2b072b65c021ff8405f76759.jpg" : imgUrl} alt='img' className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title"> {title}</h5>
                <p className="card-text">{discription}</p>
                <p className="card-text my-3" style={{ gap: "25px" }}><small className="text-body-secondary">By {!author ? "unknown" : author} posted on {date}</small><span className="badge rounded pill bg-danger">{source}</span></p>
                <a href={url} className="btn btn-sm btn-success">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem