import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './ItemGroupStyle.css';

class OilGroup extends React.PureComponent {

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
      <OilsItem key={oil.id} info={oil}>
        <NavLink to={"/item/"+this.props.info.id} className="ItemGroup">{oil}</NavLink>
        </OilsItem>)
    
    return (
      <div className='ItemGroupDisk'>
        <h1>Подбор моторного масла</h1>
        <div className='Selection'>
          <div>Состав:
            <input type='radio' multiple defaultValue={this.props.info.structure}/>
          </div>
          <div>
            Объем, л:
            <input type='radio' multiple defaultValue={this.props.info.volume}/>
          </div>
        </div>
        <div className='ItemGroupDiskList'>
          {codeOils}
        </div>
        
      </div>
    );

  }

}

export default OilGroup;
