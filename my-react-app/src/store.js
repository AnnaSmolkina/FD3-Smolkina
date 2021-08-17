import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReduser from './reducers';


 const storeApp= ()=> { 
  const store=createStore(rootReduser, applyMiddleware(logger));
  return store;
};

export default storeApp;
