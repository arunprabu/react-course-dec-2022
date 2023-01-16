import React from 'react';
import { PropTypes } from 'prop-types';

const RecommendedVideo = (props) => {
  // receiving all props incl id till isInWatchlist, index, handleAddToWatchlist
  return (
    <div className="col-md-3">
      <div className="card">
        <img
          src={props.thumbnailUrl}
          className="card-img-top"
          alt={props.title}
        />
        <div className="card-body">
          <a href="/" className="card-link">
            <h5 className="card-title">{props.title}</h5>
          </a>
          <p>
            {props.description}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.channel}</li>
          <li className="list-group-item">
            {props.views} Views | {props.publishedDate}
          </li>
          <li className="list-group-item">
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={props.handleAddToWatchlist.bind(this, props.index)}
            >
              {/* conditional rendering */}
              {props.isInWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
RecommendedVideo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  channel: PropTypes.string,
  views: PropTypes.string,
  publishedDate: PropTypes.string,
  index: PropTypes.number,
  handleAddToWatchlist: PropTypes.func,
  isInWatchlist: PropTypes.bool
};

export default RecommendedVideo;
