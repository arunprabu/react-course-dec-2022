import { Component } from "react";

// class comp a.k.a containers/smart components/stateful comp 
class TrendingVideoList extends Component{

  /*
    * state is an object 
  */

  /* state is a place for keeping comp-wide data */
  state = {
    videoResolution: '4K',
    videos: [
      { 
        id: '535423544453',
        title: 'Planet Earth II',
        description: 'Planet Earth II is a 2016 British nature documentary series produced by the BBC as a sequel to Planet Earth',
        thumbnailUrl: 'https://via.placeholder.com/250x200/008000/ffffff?text=PlanetEarthII',
        channel: 'BBC Earth',
        views: '10M',
        publishedDate: '1 month ago'
      },
      {
        id: '89678976897',
        title: 'Man Vs Wild',
        description: 'A Wild Adventure show hosted by Bear Grylls on Discovery Channel India',
        thumbnailUrl: 'https://via.placeholder.com/250x200/ffff00/000000?text=ManVsWild',
        channel: 'Discovery Channel',
        views: '9M',
        publishedDate: '3 weeks ago'
      }
    ]
  }

  // event handler method 
  handleSwitchResolution = () => { // within arrow fn -- this keyword will be available
    console.log('Clicked');
    console.log(this);
    // this.state.videoResolution = '8K'; // Do not mutate state directly. Use setState().
    this.setState( {
      videoResolution: '8K'
    });
    // whenever setState is called -- render() will be executed
    // setState will smartly merge the change with existing properties
  }
  
  // must have render method 
  render() {
    console.log('Inside Render');
    console.log(this.state.videoResolution);
    // must return JSX 
    return(
      <div className="row">
        <p>
          Enjoy the trending videos in stunning {this.state.videoResolution} Resolution | 
          <button className="btn btn-primary ms-2" 
            onClick={this.handleSwitchResolution}>Switch to 8K</button>
        </p>

        <div className="col-md-3">
          <div className="card">
            <img
              src={this.state.videos[0].thumbnailUrl}
              className="card-img-top" alt="..." />
            <div className="card-body">
              <a href="/" className="card-link">
                <h5 className="card-title">
                  {this.state.videos[0].title}
                </h5>
              </a>
              <p>{this.state.videos[0].description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{this.state.videos[0].channel}</li>
              <li className="list-group-item">{this.state.videos[0].views} Views | {this.state.videos[0].publishedDate}</li>
            </ul>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img
              src={this.state.videos[1].thumbnailUrl}
              className="card-img-top" alt="..." />
            <div className="card-body">
              <a href="/" className="card-link">
                <h5 className="card-title">
                  {this.state.videos[1].title}
                </h5>
              </a>
              <p>{this.state.videos[1].description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{this.state.videos[1].channel}</li>
              <li className="list-group-item">{this.state.videos[1].views} Views | {this.state.videos[1].publishedDate}</li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default TrendingVideoList;