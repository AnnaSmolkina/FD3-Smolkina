import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import *as itemsActions from '../actions/items';
import App from '../components/App'; 

const mapStateToProps=({items})=>({
    items:items.tire,
    isReady:items.isReady
  });
  
  const mapDispatchToProps=dispatch=>({
    ...bindActionCreators(itemsActions, dispatch),
  });
 

  export default connect(mapStateToProps, mapDispatchToProps)(App);