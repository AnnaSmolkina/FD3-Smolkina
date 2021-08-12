import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './ItemGroupStyle.css';

class ShiniGroup extends React.PureComponent {

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
      <ShiniItem key={shina.id} info={shina}>
        <NavLink to={"/item/"+this.props.info.id} className="Item">{shina}</NavLink>
      </ShiniItem>)
    
    return (
      <div className='ItemGroup'>
        <h1>Подбор шин</h1>
        <div className='Selection'>
          <div>Сезонность:
            <input type='radio' multiple defaultValue={this.props.info.seson}/>
          </div>
          <div>
            Высота, дюймы:
            <input type='radio' multiple defaultValue={this.props.info.height}/>
          </div>
          <div>
            Высота профиля, %:
            <input type='radio' multiple defaultValue={this.props.info.heightProfile}/>
          </div>
          <div>
            Диаметр, дюймы:
            <input type='radio' multiple defaultValue={this.props.info.diameter}/>
          </div>
        </div>
        <div className='ItemGroupList'>
          {codeShini}
        </div>
        
      </div>
    );

  }

}

export default ShiniGroup;
