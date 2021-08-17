import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const ItemCard = item => {
  const {name,price, model,foto, addToCard, addedCount}=item;
 
  return (
   <Card>
     <div className='card-image'>
        <Image src={foto}/>
     </div>
     <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{model}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      
        <Icon name='rub' />
        {price}
      
    </Card.Content>
    <Button onClick={addToCard.bind(this, item)} >
      Добавить в корзину {addedCount>0 && `(${addedCount})`}
    </Button>
  </Card>
  );
}; 

export default ItemCard;