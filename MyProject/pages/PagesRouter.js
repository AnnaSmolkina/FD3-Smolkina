import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_Contacts from './Page_Contacts';
import Page_Main from './Page_Main';
import Page_Catalog from './Page_Catalog';
import Page_ItemGroup from './Page_ItemGroup';
import Page_Item from './Page_Item';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={Page_Main} />
        <Route path="/catalog" component={Page_Catalog} />
        <Route path="/itemGroup/:clid" component={Page_ItemGroup} />
        <Route path="/item/:clid" component={Page_Item} />
        <Route path="/contacts" component={Page_Contacts} />
        
      </div>
    );
    
  }

}
    
export default PagesRouter;
    