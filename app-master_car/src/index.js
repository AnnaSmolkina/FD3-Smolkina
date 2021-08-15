import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';
import App from './components/app'

ReactDOM.render( 
  <BrowserRouter>
    <div>
      <PagesLinks />
      <PagesRouter />
      <App/>
    </div>
  </BrowserRouter>
, document.getElementById('root') );
