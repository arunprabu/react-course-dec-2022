import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import postReducer from "./posts/reducer";
import postsSaga from "./posts/sagas";

// We need to combine all reducers 
export const createRootReducer = () => {
  const rootReducer = combineReducers({
    posts: postReducer
  });
  return rootReducer;
}

// we need to combine all feature sagas 
// creating root saga here itself.. -or it can be in rootSaga.js file also 
export function* rootSaga(){
  yield all([
    fork(postsSaga)
    // another feature's saga can come here
  ])
}