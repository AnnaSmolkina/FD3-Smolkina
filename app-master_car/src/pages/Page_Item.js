import React from 'react';

import ItemInfo from '../components/ItemInfo';

import appData from '../components/appData';

class Page_Item extends React.PureComponent {
          
  render() {

    // раз написано <Route path="/client/:clid" component={Page_Client} />
    // значит Page_Client получит то что в УРЛе после /client/ под именем props.match.params.clid в виде строки
    let itemtId=parseInt(this.props.match.params.clid);

    let itemData=appData.itemsArr.find( c => c.id==itemtId );

    return (
      <ItemInfo
        info={itemData}
      />
    );
    
  }

}
    
export default Page_Item;
    