import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ItemCard = ({name, model,price,foto }) => (
  <Card>
    <Image src={foto}/>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{model}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='rub' />
        {price}
      </a>
    </Card.Content>
  </Card>
)

export default ItemCard;