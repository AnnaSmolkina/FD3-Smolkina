import React from 'react';

import MobileCompany from '../components/MobileCompany';

import appData from '../appData';

class Page_Company extends React.PureComponent {
          
  render() {

    return (
      <MobileCompany 
        name={appData.companyName}
        items={appData.itemsArr}
      />
    );
    
  }

}
    
export default Page_Company;
    