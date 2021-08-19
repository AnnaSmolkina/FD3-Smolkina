import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const ItemCard = item => {
  const { name, itemGroupTire,itemGroupDisk,itemGroupLiquids, itemGroupOils, price, foto, addToCart, addedCount } = item;
  return (
    <Card>
      <div className="card-image">
        <Image src={foto} />
      </div>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{itemGroupTire|| itemGroupDisk || itemGroupLiquids || itemGroupOils}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='money' />
          {price}
        </a>
      </Card.Content>
      <Button onClick={addToCart.bind(this, item)}>
        Добавить в корзину {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  );
};

export default ItemCard;
