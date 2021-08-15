import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import DiskGroup from './DiskGroup';
import ShiniGroup from './ShiniGroup';
import LiquidsGroup from './LiquidsGroup';
import OilGroup from './OilGroup';


class Items extends React.PureComponent {
  static propTypes = {
    info:PropTypes.shape({
      itemGroup: PropTypes.string.isRequired,
      
    }),
  };
 

  render() {
    return (
      <div>
        <DiskGroup>
          <img src="public/assets/img/diski/alcasta6.jpeg" alt='foto'/>
          <NavLink to={"/itemGroup/:clid"+this.props.info.itemGroup} className="ItemGroup">Автомобильные диски</NavLink>
        </DiskGroup>
        <ShiniGroup>
          <img src="public/assets/img/shini/continental.jpeg" alt='foto'/>
          <NavLink to={"/itemGroup/:clid"+this.props.info.itemGroup} className="ItemGroup">Автомобильные шины</NavLink>
        </ShiniGroup>
        <LiquidsGroup>
          <img src="public/assets/img/zhidkosti/tosol10.jpeg" alt='foto'/>
          <NavLink to={"/itemGroup/:clid"+this.props.info.itemGroup} className="ItemGroup">Технические жидкости</NavLink>
        </LiquidsGroup>
        <OilGroup>
          <img src="public/assets/img/masla/general-motors.png" alt='foto'/>
          <NavLink to={"/itemGroup/:clid"+this.props.info.itemGroup} className="ItemGroup">Автомобильное масло</NavLink>
        </OilGroup>
        
      </div>
      
      
    );

  }
}

export default Items;



