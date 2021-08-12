import React from 'react';
import MasterCar from '../components/MasterCar';
import appData from '../appData';

class Page_Main extends React.PureComponent {
          
  render() {

    return (
      <MasterCar>
        name={appData.companyName}
        catalog={appData.itemsGroup}
        items={appData.itemsArr}
      </MasterCar>
    );
    
  }

}
    
export default Page_Main;
    