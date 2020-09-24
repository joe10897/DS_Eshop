import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reduxThunk from "redux-thunk";
import reducers from "../reducers";

/**
 * Inject middle-ware to enhance redux store.
 */
function enhancer() {
  const middlewares = [reduxThunk];
  return composeWithDevTools(applyMiddleware(...middlewares));
}

/**
 * Define the global store to handle all application data
 *
 * In redux app, there should be only one store in whole application.
 */
const generateStore = () => {
  const store = createStore(reducers, enhancer());
  return store;
};

const store = generateStore();
export default store;
