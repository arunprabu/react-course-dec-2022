import React from 'react'

const LatestVideo = ({ thumbnailUrl, title, channel, views, publishedDate, children } ) => { //receiving props
  // console.log(props);
  // props are objects
  // props are read-only 
  // props can have children
  // props are used for receiving data from parent comp

  console.log('Is it re-rendered?');
  
  return (
    <div className="card">
      <img 
        src={thumbnailUrl} 
        className="card-img-top" alt="..." />
      <div className="card-body">
        <a href="/" className="card-link">
          <h5 className="card-title">
            {title}
          </h5>
        </a>
        <p>{children}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{channel}</li>
        <li className="list-group-item">{views} Views | {publishedDate}</li>
      </ul>
    </div>
  )
}

export default LatestVideo