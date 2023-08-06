import React from 'react'
import './NewsItem.css'

function NewsItem(props) {
  
        let {title, discription, imgUrl, url , author , date , source} = props
        return (
        
                <div  className="card" >
                    
                    <img src={!imgUrl ?"https://www.treetopshospice.org.uk/wp-content/uploads/2019/05/Speech-bubbles-oops-failed-payment-01.png": imgUrl} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title"> {title}</h5>
                        <p className="card-text">{discription}</p>
                        <p className="card-text my-3" style={{gap:"25px"}}><small className="text-body-secondary">By {!author?"unknown": author  } posted on {date}</small><span className="badge rounded pill bg-danger"   >{source}</span></p>


                        <a href={url} target="_blank" className="btn btn-sm btn-success">Read More</a> 
                    </div>
                </div>
                )
}

export default NewsItem