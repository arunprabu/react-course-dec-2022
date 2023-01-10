import React, { Component } from 'react';

class LifeCycleDemo extends Component {
  constructor() {
    // optional to have constructor
    super();
    console.log('======== 1. Inside constructor() ==========');

    // ideal place for your initial comp-wide data
    this.state = {
      isLoading: true,
      isError: false,
      featureName: ''
    };
  }

  // lifecycle hook
  componentDidMount() {
    // this method will be exec'd ONLY ONCE after render
    // this method will be called when the component's UI comes into view
    // ideal place for you to send rest api calls
    console.log('======== 3. Inside componentDidMount() ======');
    // mocking the rest api call with timeout
    setTimeout(() => {
      // upon getting successful res
      this.setState({
        isLoading: false,
        isError: false,
        featureName: 'Demo of LifeCycle Hooks',
      });

      // upon getting error res
      // this.setState({
      //   isLoading: false,
      //   isError: true
      // });
    }, 5000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // when the state is updated -- this will be called
    // it must return either true or false
    // compare the prevState (this.state) and new state (nextState)
    // if changes found, then return true else return false
    console.log('=========4. Inside shouldComponentUpdate() ======');
    // console.log(nextProps);
    // console.log(this.state); // prevState
    // console.log(nextState); // new state
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // called immediately after the UPDATE in JSX (after the re-rendering)
    // will never be called after initial rendering
    console.log('======== 6. Inside componentDidUpdate() ==========');
    console.log(prevProps);
    console.log(prevState);
    // you can get the prevProps and also prevState
  }

  render() {
    // this method will be called immediately after constructor a.k.a initial rendering
    console.log('======== 2 & 5 Inside render() ==========');

    if (this.state.isLoading) {
      return <div className="spinner-border text-warning" role="status"></div>;
    }

    if (this.state.isError) {
      return (
        <div className="alert alert-danger"> Some Error Occured. Try again later!</div>
      );
    }

    // if no error and no longer loading
    return (
      <div>
        <h3>Understanding Life Cycle Hooks of Class Components</h3>
        <p>Feature: {this.state.featureName}</p>
      </div>
    );
  }
}

export default LifeCycleDemo;
