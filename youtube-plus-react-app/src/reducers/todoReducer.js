// Reducer? 
// function that should take in two args (state, action)
// and it must return state 

const todoReducer = (state = [], action) => {
  // state is comp-wide data
  // action is an obj 
  // action.type is must 
  // action.payload is optional 
  
  switch(action.type){
    case 'ADD_TODO':
      return [...state, action.payload];
    
    case 'LIST_TODOS':
      return state;

    default: 
      return state;
  }
};

export default todoReducer;