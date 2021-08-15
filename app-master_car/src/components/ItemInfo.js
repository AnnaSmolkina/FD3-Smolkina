import React from 'react';
import PropTypes from 'prop-types';
import Disk from './Disk';
import Shini from './Shini';
import Liquids from './Liquids';
import Oil from './Oil';




class ItemInfo extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        heightProfile: PropTypes.number.isRequired,
        diameter: PropTypes.number.isRequired,
        model: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        structure: PropTypes.string.isRequired,
        volume: PropTypes.number.isRequired,
        itemGroup: PropTypes.string.isRequired,
        foto:  PropTypes.any.isRequired,
      }),
  };

  render() {
        
    return (
      <div className='Item'>
        <Disk/>
        <Shini/>
        <Liquids/>
        <Oil/>
      </div>
    );

  }

}

export default ItemInfo;
