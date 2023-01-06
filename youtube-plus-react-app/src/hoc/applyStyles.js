import React from "react";

// hoc is a function that takes in a comp as param and returns a New Comp
const applyStyles = ( OriginalComponent) => { // receiving original comp as arg 
  
  // creating new comp -- and return 
  const NewComponent = (props) => { 
    return (
      <div className="hoc-style">
        <OriginalComponent {...props}/>
      </div>
    );
  }
  return NewComponent;
}

export default applyStyles;
