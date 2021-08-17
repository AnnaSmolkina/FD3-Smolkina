import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import *as cardActions from '../actions/card';
import Menu from '../components/Menu';
import uniqBy from 'lodash/uniqBy';


const mapStateToProps=({card})=>({
    totalPrice: card.tires.reduce((total,item)=>total+item.price,0),
    count: card.tires.length,
    tires:uniqBy(card.tires, c=> c.id),
  });
  
  const mapDispatchToProps=dispatch=>({
    ...bindActionCreators(cardActions, dispatch),
  });
 

  export default connect(mapStateToProps, mapDispatchToProps)(Menu);

