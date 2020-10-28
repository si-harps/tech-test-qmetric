import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger({
  collapsed: true
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);