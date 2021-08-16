import React from 'react';
import { Input, Menu } from 'semantic-ui-react';

const MenuFilter=({setFilter, filterBy}) => (
  <Menu secondary>
  <Menu.Item 
   name='all'
   active={filterBy === 'all'} 
   onClick={setFilter.bind(this, 'all')}>
     Все
  </Menu.Item>
  <Menu.Item 
   name='price_high' 
   active={filterBy === 'price_high'} 
   onClick={setFilter.bind(this, 'price_high')}>
     Дорогие
  </Menu.Item>
  <Menu.Item 
   name='price_low' 
   active={filterBy === 'price_low'} 
   onClick={setFilter.bind(this, 'price_low')}>
   Дешёвые
  </Menu.Item>
  <Menu.Item 
   name='seson' 
   active={filterBy === 'seson'} 
   onClick={setFilter.bind(this,'seson')}>
   Сезон
 </Menu.Item>
 <Menu.Menu position='right'>
   <Menu.Item>
    <Input icon='search' placeholder='Search...' />
   </Menu.Item>
   <Menu.Item
    name='search'
    active={filterBy === 'search'}
    onClick={setFilter.bind(this, 'search')}>
    Поиск
   </Menu.Item>
  </Menu.Menu>
</Menu>
);
 
 

export default MenuFilter;
  
    
  
