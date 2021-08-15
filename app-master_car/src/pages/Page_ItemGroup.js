import React from 'react';
import PropTypes from 'prop-types';
import Items from './components/Items'
import appData from '../components/appData';

class Page_ItemGroup extends React.PureComponent {
  static propTypes = {
    info:PropTypes.shape({
      itemGroup: PropTypes.string.isRequired,
     }),
    }
          
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
    