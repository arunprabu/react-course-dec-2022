import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FETCH_REQUEST } from "../store/posts/types";

export class PostList extends Component {
  componentDidMount() {
    console.log("2. Inside compDidMount");
    // dispatch an action type 'FETCH_REQUEST'
    console.log(this.props);
    this.props.dispatch({
      type: FETCH_REQUEST,
    });
  }

  render() {
    console.log("1. Inside render");
    console.log(this.props);
    if(this.props.isLoading){
      return <div className="text-center spinner-border text-success"></div>
    }

    if(this.props.isError) {
      return <div className="alert alert-danger">Some error occured!</div>;
    }

    return (
      <div>
        <h3>Post List</h3>
        <div className="list-group text-left">
          { this.props.postList?.map( (post) => {
            return (
              <div className="list-group-item list-group-item-action text-start" key={post.id}>
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                  </h5>
                  <small>Post Id: {post.id}</small>
                </div>
                <p className="mb-1 text-left">{post.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

// writing a fn to subscribe to store data
// this must return store data -- that will become props
const mapStateToProps = ({posts}) => { 
  console.log(posts); 
  return {
    isLoading: posts.isLoading,
    isError: posts.isError,
    postList: posts.postList,
  };
}

// connect() will get you dispatch fn as part of props
// connect(mapStateToProps) will get you dispatch fn and store data available as part of props
export default connect(mapStateToProps)(PostList);

