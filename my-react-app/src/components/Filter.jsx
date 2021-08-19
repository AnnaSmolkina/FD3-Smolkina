import React from 'react';
import {  Menu } from 'semantic-ui-react';

const Filter = ({ setFilter, filterBy }) => (
  <Menu secondary>
    <Menu.Item
      active={filterBy === 'all'}
      onClick={setFilter.bind(this, 'all')}>
      Все
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'itemGroupDisk'}
      onClick={setFilter.bind(this, 'itemGroupDisk')}>
      Диски автомобильные
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'itemGroupTire'}
      onClick={setFilter.bind(this, 'itemGroupTire')}>
      Шины автомобильные
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'itemGroupLiquids'}
      onClick={setFilter.bind(this, 'itemGroupLiquids')}>
      Технические жидкости
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'itemGroupOils'}
      onClick={setFilter.bind(this, 'itemGroupOils')}>
      Масла
    </Menu.Item>
    
    
  </Menu>
);

export default Filter;
