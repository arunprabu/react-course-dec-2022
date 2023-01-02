import React, { Component } from 'react'

class RecommendedVideoList extends Component {

  constructor(){
    super(); // must call super in derived class' constructor to access 'this' keyword
    // comp-wide data 
    this.state = {
      videos: [
        {
          id: '65467575',
          title: 'Ind Vs Bangladesh Cricket',
          description: 'Enjoy watching highlights of Ind Vs Bangladesh Cricket Dec 2023',
          thumbnailUrl: 'https://via.placeholder.com/250x200/008000/ffffff?text=IndVsBan',
          channel: 'Hotstar',
          views: '6M',
          publishedDate: '1 month ago',
          isInWatchlist: false
        },
        {
          id: '658568688',
          title: 'FIFA World Cup 2023 Final',
          description: 'Full match of FIFA World Cup 2023 Final',
          thumbnailUrl: 'https://via.placeholder.com/250x200/ffff00/000000?text=Arg Vs France',
          channel: 'JioCinema',
          views: '8M',
          publishedDate: '3 weeks ago',
          isInWatchlist: false
        },
        {
          id: '79080789',
          title: 'Year End Vacation Special',
          description: 'Year End Vacation Special show only on ABC Channel',
          thumbnailUrl: 'https://via.placeholder.com/250x200/ffff00/000000?text=Vacation2022',
          channel: 'ABC',
          views: '5M',
          publishedDate: '3 weeks ago',
          isInWatchlist: true
        },
        {
          id: '96865867',
          title: 'Top 10 Goals of Messi',
          description: 'Enjoy watching Top 10 Goal of Messi only on XYZ Channel',
          thumbnailUrl: 'https://via.placeholder.com/250x200/ffff00/000000?text=MessiGoals',
          channel: 'XYZ',
          views: '10M',
          publishedDate: '3 weeks ago',
          isInWatchlist: false
        }
      ]
    }
  }

  // add the event handler
  handleAddToWatchlist(index) {
    console.log(this);
    console.log(index);

    // working with state immutably
    let duplicateVideos = [ ...this.state.videos];
    duplicateVideos[index].isInWatchlist = !duplicateVideos[index].isInWatchlist;
    console.log(duplicateVideos);
    this.setState({
      videos: duplicateVideos
    });
  }

  render() {

    // conditional rendering
    if(!Array.isArray(this.state.videos) || this.state.videos.length === 0) {
      return(
        <div className='alert alert-warning'>
          Sorry! No Recommended Videos Found. Try watching more videos
        </div>
      )
    }

    // all component-specific transformations can be done here
    // loop-thru 
    // if it is an array and has length > 0
    let videoList = null;
    if(Array.isArray(this.state.videos) && this.state.videos.length > 0) {
      videoList = this.state.videos.map( ( video, index) => {
        console.log(video);
        return(
          <div className='col-md-3' key={video.id}>
            <div className="card">
              <img
                src={video.thumbnailUrl}
                className="card-img-top" alt={video.title} />
              <div className="card-body">
                <a href="/" className="card-link">
                  <h5 className="card-title">
                    {video.title}
                  </h5>
                </a>
                <p>{video.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{video.channel}</li>
                <li className="list-group-item">{video.views} Views | {video.publishedDate}</li>
                <li className="list-group-item">
                  <button type='button' 
                    className='btn btn-success btn-sm'
                    onClick={this.handleAddToWatchlist.bind(this, index)}>
                    { /* conditional rendering */ }
                    { video.isInWatchlist? 'In Watchlist' : 'Add to Watchlist' }
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )
      });
    }

    return (
      <div className='row'>
        { videoList }
      </div>
    )
  }
}

export default RecommendedVideoList