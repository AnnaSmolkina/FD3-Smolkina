import { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import Menu from './Menu';
import ItemCard from './ItemCard';
import { Card } from 'semantic-ui-react';
import MenuFilter from '../containers/Filter';


class App extends Component {
  
  componentWillMount(){
    const {setItems}=this.props;
    axios.get('/items.json').then(({data})=>{
      setItems(data);
    });
  }

  render(){
    const {items, isReady, setFilter}=this.props;
    return (
      <Container>
       <Menu/>
       <MenuFilter setFilter={setFilter}/>
       <Card.Group itemsPerRow={4}>
       { !isReady
          ? 'Загрузка...' 
          :items.map((item, i)=> <ItemCard key={i} {...item}/>)}
       </Card.Group>
        
      
      </Container>
     
    );
  }
 };



export default App;
