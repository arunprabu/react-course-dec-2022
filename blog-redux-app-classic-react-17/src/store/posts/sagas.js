/* 1. worker saga 
    ajax logic 
    if ajax success / failure redispatch

2. watcher saga 
    watching over the dispatched actions */

import { call, all, fork, takeEvery, put } from 'redux-saga/effects';
import { fetchApi } from '../../utils/fetchApi';
import { CREATE_ERROR, CREATE_REQUEST, CREATE_SUCCESS, FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./types";

const POSTS_API_URL = "http://jsonplaceholder.typicode.com/posts";
// worker saga
function* handleFetchRequest() {

  const res = yield call(fetchApi, POSTS_API_URL, 'get');
  if(res.error){
    // dispatch with error -- FETCH_ERROR
    // use put() from redux-saga
    yield put({
      type: FETCH_ERROR,
      payload: res.error
    });
  }else {
    // dispatch with success -- FETCH_SUCCESS
    // use put() from redux-saga
    yield put({
      type: FETCH_SUCCESS,
      payload: res,
    });
  }
}

// watcher saga -- watch specific action type and run the worker saga
function* watchFetchRequest() {  
  yield takeEvery(FETCH_REQUEST, handleFetchRequest);
}

// worker saga for create request
function* handleCreatePost(action) { // receiving form data
  // ajax call 
  const res = yield call(fetchApi, POSTS_API_URL, 'post', action.payload);
  if(res.error){
    // dispatch with error -- CREATE_ERROR
    // use put() from redux-saga
    yield put({
      type: CREATE_ERROR,
      payload: res.error
    });
  }else {
    // dispatch with success -- CREATE_SUCCESS
    // use put() from redux-saga
    yield put({
      type: CREATE_SUCCESS,
      payload: res,
    });
  }
}

// watcher saga for create request
function* watchCreateRequest() {
  yield takeEvery(CREATE_REQUEST, handleCreatePost);
}


// feature saga 
function* postsSaga() {
  yield all([
    fork(watchFetchRequest),
    fork(watchCreateRequest)
  ])
}

export default postsSaga;