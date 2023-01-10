import React, { useEffect, useState } from 'react';

const Blog = () => {

  console.log('1. Program Started in Blog Comp');
  const [topicName, setTopicName ] = useState('React Hooks Demo');
  const [publishedDate, setPublishedDate] = useState(new Date());

  console.log('2. Before useEffect in Blog Comp');
  // In useEffect hook, first param: effect, second param: dep list
  useEffect(() => {
    // runs after every initial rendering
    // and also upon state update as well -- only if dep changed
    console.log('4. Inside useEffect');
    // this is an alternative to lifecycle hooks (componentDidMount and componentDidUpdate)
    // ideal place for your REST API calls
    // you can update the state from here
    document.title = topicName;
  }, [topicName]); // second arg is dependency. it can be an array -- it is optional
  // if the dep is changed by any means, then the effect callback will be called
  // remove the dep and have the empty array n see

  const handleChangeTopic = () => {
    console.log('5. Inside handleChangeTopic');
    setTopicName('Demo of useEffect and useState Hook');
  };

  const handleUpdatePublishedDate = () => {
    setPublishedDate(new Date());
  };

  console.log('3. Program Ended in Blog Comp');
  return (
    <div>
      <h3>Blog</h3>
      <p>Topic Name: {topicName}</p>
      <button type='button' onClick={handleChangeTopic}>Change Topic</button>

      <p>Published Date: {publishedDate.toString()}</p>
      <button type="button" onClick={handleUpdatePublishedDate}>Update Published Date</button>
    </div>
  );
};

export default Blog;