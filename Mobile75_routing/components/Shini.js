import React from 'react';
import PropTypes from 'prop-types';


import './Shini.css';

class Shini extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      seson: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
      heightProfile: PropTypes.number.isRequired,
      diameter: PropTypes.number.isRequired,
      model: PropTypes.string.isRequired,
      itemGroup: PropTypes.string.isRequired,
      foto:  PropTypes.any.isRequired,
    }),
  };

  render() {
    let codeShini=this.props.info.map (shina =>
      <ShiniItem key={shina.id} info={shina}/>)
    
    return (
      <div className='Item'>
        <div className='Foto'>
          {this.props.info.foto}
        </div>
        <h1 className='ItemName'>{this.props.info.name}</h1>
        <div className='ItemInfo'>
          {codeShini}
        </div>
      </div>
    );

  }

}

export default Shini;
