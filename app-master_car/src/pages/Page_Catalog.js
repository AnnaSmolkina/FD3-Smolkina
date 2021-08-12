import React from 'react';
import appData from '../appData';
import Catalog from '../components/Catalog';

class Page_Catalog extends React.PureComponent {
          
  render() {

    return (
      <Catalog>
        name={appData.companyName}
        items={appData.itemsArr}
      </Catalog>
    );
    
  }

}
    
export default Page_Catalog;