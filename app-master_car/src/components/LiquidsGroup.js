import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './ItemGroupStyle.css';

class LiquidsGroup extends React.PureComponent {

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
      <LiquidItem key={liquid.id} info={liquid}>
        <NavLink to={"/item/"+this.props.info.id} className="ItemGroup">{liquid}</NavLink>
      </LiquidItem>)
    
    return (
      <div className='ItemGroup'>
        <h1>Поиск технической жидкости:</h1>
        <div className='Selection'>
           Тип:
            <input type='radio' multiple defaultValue={this.props.info.itemGroup}/>
            <select defaultValue="подбор"/>
          </div>
        <div className='ItemGroupList'>
          {codeLiquids}
        </div>
        
      </div>
    );

  }

}

export default LiquidsGroup;
