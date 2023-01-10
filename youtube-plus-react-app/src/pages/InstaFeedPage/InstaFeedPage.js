import React, { Component } from 'react';
import axios from 'axios';

class InstaFeedPage extends Component {
  state = {
    isLoading: true,
    isError: false,
    photos: []
  };

  componentDidMount() {
    // ideal lifecycle hook to connect with REST API
    // What's the REST API URL? https://jsonplaceholder.typicode.com/photos?_limit=20
    // What's the HTTP Method? GET
    // What's the REST API Client Tool? Axios (npm i axios )
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
      .then( (res) => {
        console.log(res.data);
        // TODO: make use of the above data and display the UI  
      })
      .catch( (err) => {
        console.log(err);
      })
      .finally( () => {
        console.log('It is over!');
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="text-center">
          <div className="spinner-border text-danger" role="status"></div>
        </div>
      );
    }

    if (this.state.isError) {
      return (
        <div className="alert alert-danger" role="alert">
          Sorry! Unable to fetch photos. Try again after sometime!
        </div>
      );
    }

    return (
      <div className="row">

        <div className="col-md-3">
          <div className="card shadow-sm">
            <img src="" alt="..." />
            <div className="card-body">
              <p className="card-text">This is a wider card</p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default InstaFeedPage;
