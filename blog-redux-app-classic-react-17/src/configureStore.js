// Setting up store
import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { createRootReducer, rootSaga } from "./store";

export default function configureStore(){

  // integrating redux-devtools-extension
  const composeEnhancers = composeWithDevTools({
    // specify name, actionsBlacklist, actionsCreators and other options
  });

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(),
    // integrate saga middleware
    composeEnhancers(applyMiddleware(sagaMiddleware))
  ); // special param reducer is needed
  console.log(store);

  // NEVER FORGET TO RUN THE ROOT SAGA 
  sagaMiddleware.run(rootSaga);
  return store;
}
