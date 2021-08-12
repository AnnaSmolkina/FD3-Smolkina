import React from 'react';

import MasterCar from '../components/MasterCar';

import appData from '../components/app/appData';

class Page_Main extends React.PureComponent {
          
  render() {

    return (
      <MasterCar 
        name={appData.companyName}
        items={appData.itemsArr}
      />
    );
    
  }

}
    
export default Page_Main;
    