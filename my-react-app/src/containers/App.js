import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import *as itemsActions from '../actions/items';
import App from '../components/App'; 
import  orderBy from 'lodash/orderBy';


const sortBy=(items, filterBy )=> {
  
  switch (filterBy) {
    case 'price_high':
      return orderBy(items, 'price', 'desc');

    case 'price_low':
       return orderBy(items, 'price', 'asc');

    case 'seson':
      return orderBy(items, 'price', 'asc');
  
    default:
      return items;
    
  }
};
 
const filterItems=(items,searchQuery) =>
  items.filter (
   obj=>
    obj.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0);
  
  
const searchItems=(items, filterBy, searchQuery)=> {
  return sortBy(filterItems(items,searchQuery),filterBy);
}

const mapStateToProps=({items,filter})=>({
    items: items.tires && searchItems(items.tires, filter.filterBy,filter.searchQuery),
    isReady:items.isReady
  });
  
  const mapDispatchToProps=dispatch=>({
    ...bindActionCreators(itemsActions, dispatch),
  });
 

  export default connect(mapStateToProps, mapDispatchToProps)(App);
