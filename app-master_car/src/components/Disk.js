import React from 'react';
import PropTypes from 'prop-types';


import './Disk.css';

class Disk extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      diameter: PropTypes.number.isRequired,
      model: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      itemGroup: PropTypes.string.isRequired,
      foto:  PropTypes.any.isRequired,
    }),
  };

  render() {
    let codeDisk=this.props.info.map (disk =>
      <DiskItem key={disk.id} info={disk}/>)
    
    return (
      <div className='Item'>
        <div className='Foto'>
          {this.props.info.foto}
        </div>
        <h1 className='ItemName'>{this.props.info.name}</h1>
        <div className='ItemInfo'>
          {codeDisk}
        </div>
      </div>
    );

  }

}

export default Disk;
