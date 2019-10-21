import React from 'react';
import { Link } from 'react-router-dom'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './style.scss'

const  getDate = (val) => {
    return new Date(val).toDateString();
}

const List = ({stories}) => {
  
    return(
      <ul className="list">
      {stories.map(story=>{
          const storyURL = `/detail/${story.id}`;
          return (
            <li key={story.id}>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Body className="card-title">
                    <Card.Title>{story.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Score - {story.score}</ListGroupItem>
                    <ListGroupItem>Author - {story.by}</ListGroupItem>
                    <ListGroupItem>{getDate(story.time)}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Link to={{ pathname: storyURL, state: {storyDetails:story}}}>See details</Link>
                </Card.Body>
                </Card>
            </li>
        )
      })}
        
      </ul>
    )
  
}
export default List;