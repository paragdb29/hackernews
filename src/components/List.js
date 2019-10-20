import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './style.scss'

const List = ({stories}) => {
  
    return(
      <ul className="list">
      {stories.map(story=>(
          <li key={story.id}>
          <Card style={{ width: '18rem' }}>
              <Card.Body>
                  <Card.Title>{story.title}</Card.Title>
                  <Card.Text>{story.score}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
              </Card>
          </li>
      ))}
        
      </ul>
    )
  
}
export default List;