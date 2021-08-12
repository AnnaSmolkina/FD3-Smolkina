import React from 'react';

import Items from './Items'
import appData from '../appData';

class Page_ItemGroup extends React.PureComponent {
          
  render() {

    let group=parseInt(this.props.match.params.clid);

    let groupInfo=appData.itemsArr.find( c => c.itemGroup==group );

    return (
      <Items
        info={groupInfo}
      />
    );
    
  }

}
    
export default Page_ItemGroup;
    