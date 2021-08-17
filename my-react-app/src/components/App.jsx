import React, { Component } from 'react';
import {Card, Container } from 'semantic-ui-react';
import axios from 'axios';
import Menu from '../containers/Menu';
import ItemCard from '../containers/ItemCard';
import MenuFilter from '../containers/Filter';


class App extends Component {
  
  componentDidMount (){
    const {setItems}=this.props;
    axios.get('/items.json').then(({data})=>{
      setItems(data);
    });
  }

  render(){
    const {items, isReady}=this.props;
    return (
      <Container>
       <Menu/>
       <MenuFilter/>
       <Card.Group itemsPerRow={4}>
         {!isReady
          ? 'Загрузка...' 
          : items.map(item => <ItemCard key={item.id} {...item}/>)}
       </Card.Group>
      </Container>
     
    );
  }
 };



export default App;
