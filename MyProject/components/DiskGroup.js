import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './ItemGroupStyle.css';

class DiskGroup extends React.PureComponent {

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
      <DiskItem key={disk.id} info={disk}>
        <NavLink to={"/item/"+this.props.info.id} className="Item">{codeDisk}</NavLink>
      </DiskItem>)
    
    return (
      <div className='ItemGroup'>
        <h1>Поиск дисков</h1>
        <div className='Selection'>
          <div>Тип:
            <input type='radio' multiple defaultValue={this.props.info.type}/>
          </div>
          <div>
            Ширина, дюймы:
            <input type='radio' multiple defaultValue={this.props.info.width}/>
          </div>
          <div>
            Диаметр, дюймы:
            <input type='radio' multiple defaultValue={this.props.info.diameter}/>
          </div>
        </div>
        <div className='ItemGroupDiskList'>
          {codeDisk}
        </div>
        
      </div>
    );

  }

}

export default DiskGroup;
