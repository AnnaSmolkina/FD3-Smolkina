import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import *as cardActions from '../actions/card';
import ItemCard from '../components/ItemCard';


const mapStateToProps=({card},{id})=>({
    addedCount:card.tires.reduce(
      (count,item)=>count+(item.id===id ?1 :0),
      0,
      ),
  });
  
  const mapDispatchToProps=dispatch=>({
    ...bindActionCreators(cardActions, dispatch),
  });
 

  export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);

