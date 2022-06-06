import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Item({item}) {

  const {title, description, pictureUrl} = item;

  return (
  <> 
    <Card className='Card'>
      <Card.Img className='CardImg' variant="top" src={pictureUrl}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='CardText'>
          {description} 
        </Card.Text>
          <div className='button'>
            <Button className='buttoncontainer' variant="primary">More Information</Button>
          </div>
      </Card.Body>
    </Card>
    <br />   
  </>
  )
}
