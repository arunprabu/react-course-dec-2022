import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  // to catch error
  // when there is a runtime error this method will be called
  // when you do not have runtime error -- this wont be called
  //This lifecycle is invoked after an error has been thrown by a descendant component. 
  // It receives the error that was thrown as a parameter and should return a value to update state. 
  static getDerivedStateFromError(error) {
    console.log('Inside getDerivedStateFromError');
    // console.log(error); // you can see the error
    //should return a value to update state.
    return {
      hasError: true
    };
  }

  // lifecycle hook
  // only when a runtime error occurs -- this will be called
  componentDidCatch(error, errorInfo) {
    console.log('Inside componentDidCatch');
    console.log(error); // the error in original source 
    console.log(errorInfo);  // the error in compiled bundle.js 
    // you can also log these errors in logrocket or any other tools
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger">
          <h2>Some Error Occurred</h2>
          <p>Try again after sometime. Contact Admin, if the issue persists</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;