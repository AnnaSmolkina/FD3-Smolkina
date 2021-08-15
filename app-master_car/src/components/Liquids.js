import React from 'react';
import PropTypes from 'prop-types';



class Liquids extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
       id: PropTypes.number.isRequired,
       name: PropTypes.string.isRequired,
       price: PropTypes.number.isRequired,
       volume: PropTypes.string.isRequired,
       model: PropTypes.string.isRequired,
       itemGroup: PropTypes.string.isRequired,
       foto:  PropTypes.any.isRequired,
    }),
  };

  render() {
    let codeLiquids=this.props.info.map (liquid =>
      <div key={liquid.id} info={liquid}/>)
    
    return (
      <div className='Item'>
        <div className='Foto'>
          {this.props.info.foto}
        </div>
        <h1 className='ItemName'>{this.props.info.name}</h1>
        <div className='ItemInfo'>
          {codeLiquids}
        </div>
      </div>
    );

  }

}

export default Liquids;
