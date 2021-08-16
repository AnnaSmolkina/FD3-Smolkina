import { Component } from 'react';
import {connect} from 'react-redux';
import { Container } from 'semantic-ui-react';
import {setItems} from './actions/items';
import axios from 'axios';
import Menu from './components/Menu';
import ItemCard from './components/ItemCard';
import { Card } from 'semantic-ui-react';


class App extends Component {
  
  componentWillMount(){
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
       <Card.Group itemsPerRow={4}>
       { !isReady
          ? 'Загрузка...' 
          :items.map((item, i)=> <ItemCard key={i} {...item}/>)}
       </Card.Group>
        
      
      </Container>
     
    );
  }
 };

const mapStateToProps=({items})=>({
  items:items.shina,
  isReady:items.shina

});

const mapDispatchToProps=dispatch=>({
  setItems:items=>dispatch(setItems(items))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
