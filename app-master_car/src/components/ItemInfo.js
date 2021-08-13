import React from 'react';
import PropTypes from 'prop-types';
import Disk from './Disk';
import Shini from './Shini';
import Liquids from './Liquids';
import Oil from './Oil';


import './ItemStyle.css';

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
        <div className='Foto'>
          {this.props.info.foto}
        </div>
        <h1 className='ItemName'>{this.props.info.name}</h1>
        <div className='ItemInfo'>
          {this.props.price}
        </div>
      </div>
    );

  }

}

export default ItemInfo;
