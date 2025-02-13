import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description ,imageUrl, link,date,creator} = this.props;
    return (
      <div className="card" >
      <img src={imageUrl || 'https://img.etimg.com/thumb/msid-118072547,width-300,height-225,imgsize-1812664,resizemode-75/future-city-humans-and-ai-unite.jpg'} className="card-img-top" alt="..."/> 
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <p className="card-text"><small className="text-body-secondary">By {creator} {new Date(date).toLocaleString()}</small></p>
        <a href={link} target='_blank' className="btn btn-primary btn-sm">Read More</a>
      </div>
    
    </div>
    )
  }
}

export default NewsItem
