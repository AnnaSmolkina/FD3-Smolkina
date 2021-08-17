import React from 'react';
import { Menu,Popup, List, Button, Image, ListContent, ListItem, MenuItem, MenuMenu } from 'semantic-ui-react';

const CardComponent=({name, id, foto, removeFromCard})=> (
  <List selection divided verticalAlign='middle'>
    <ListItem>
      <ListContent floated='right'>
        <Button onClick={removeFromCard.bind(this,id)} color ='red'>Удалить</Button>
      </ListContent>
      <Image avatar scr={foto}/>
      <ListContent>{name} </ListContent>
    </ListItem>
  </List>

);

const MenuComponent=({totalPrice,count,tires})=> (
  <Menu>
    <MenuItem name='browse'>
      Подбор шин для вашего автомобиля
    </MenuItem>
    <MenuMenu position='right'>
      <MenuItem name='signup'>
        Итого:&nbsp;<b>{totalPrice}</b>&nbsp; руб.
      </MenuItem>

      <Popup
       trigger={
         <MenuItem name='help'>
           Корзина &nbsp; (<b>{count}</b>)
         </MenuItem>
       }
       content={tires.map(item=>(
         <CardComponent{... item}/>
       ))}
       on='click' hideOnscroll/>
    </MenuMenu>
  </Menu>
);

export default MenuComponent;
