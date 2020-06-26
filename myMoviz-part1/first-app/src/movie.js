import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardGroup, CardBody, Button, Badge} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faVideo, faStar } from '@fortawesome/free-solid-svg-icons'

function Movie(props) {

  return (
    <div className="col-12 col-lg-6 col-xl-4">
      <Card>
      <CardImg top width="100%" src={props.movieImg} alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.movieName}</CardTitle>
        <CardText>Favoris <FontAwesomeIcon icon={faHeart} /></CardText>
        <CardText>Nombre de vues <FontAwesomeIcon icon={faVideo}/> <Badge color="secondary">0</Badge> </CardText>
        <CardText>Mon avis <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/> {props.movieNote} <Badge color="secondary">+1</Badge> <Badge color="secondary">-1</Badge></CardText>
        <CardText>Moyenne <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/> {props.movieVote}</CardText>
        <CardText>{props.movieDesc}</CardText>
      </CardBody>
      </Card>
    </div>
  );
}

export default Movie;