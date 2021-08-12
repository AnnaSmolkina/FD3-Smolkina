import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import  {DataProvider} from './components/datastore-service-context';
import DataService from './components/services';
import {Provider} from 'react-redux';
import store from './store';

const dataService=new DataService();

ReactDOM.render( 
  <Provider store={store}>
      <DataProvider value={dataService}>
          <App />
      </DataProvider> 
  </Provider>,
  document.getElementById('root'));