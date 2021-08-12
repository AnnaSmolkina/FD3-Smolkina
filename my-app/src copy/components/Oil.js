import React from 'react';
import PropTypes from 'prop-types';


import './Oil.css';

class Oil extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      structure: PropTypes.string.isRequired,
      volume: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      itemGroup: PropTypes.string.isRequired,
      foto:  PropTypes.any.isRequired,
    }),
  };

  render() {
    let codeOils=this.props.info.map (oil =>
      <OilsItem key={oil.id} info={oil}/>)
    
    return (
      <div className='Item'>
        <div className='Foto'>
          {this.props.info.foto}
        </div>
        <h1 className='ItemName'>{this.props.info.name}</h1>
        <div className='ItemInfo'>
          {codeOils}
        </div>
      </div>
    );

  }

}

export default Oil;
