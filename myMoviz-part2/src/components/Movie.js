import React, {useState} from 'react';
import '../App.css';
import { 
  Button,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Badge,
  ButtonGroup,
 } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faVideo} from '@fortawesome/free-solid-svg-icons'

function Movie(props) {

  const [like, setLike] = useState(false);
  const [movie, setMovie] = useState(false);
  const [countWatchMovie, setcountWatchMovie] = useState(0);
  const [myRatingMovie , setmyRatingMovie ] = useState(0);

  var tabGlobalRating = [];
  var tabMyRating = [];

  /*
  1. la note : props.globalRating
  2. le nombre de votes : props.globalCountRating
  EXTRA: la note de l'utilisateur : myRatingMovie
  3. var total = (la note + myRatingMovie) * (le nb de votes + 1)
  4. total = total / le nb de votes
  */
  var totalBoolean = false;
  function addOne(RatingReceive) {
    totalBoolean = true;
    if(RatingReceive >= 0 && RatingReceive <= 10) {
      setmyRatingMovie(RatingReceive);
    }
  }
  for(var i = 0; i < 10; i++){
    if(totalBoolean === true) {
      var total = (props.globalRating + myRatingMovie) * (props.globalCountRating + 1) 
      total = total / (props.globalCountRating + 1)
      //console.log(total , "cliqué")
    } else {
      var total = (props.globalRating) * (props.globalCountRating) 
      total = total / (props.globalCountRating)
      console.log(total, "pas cliqué")
    }
  }
  for(var i = 0; i < 10; i++){
      var color = {}

      if(i<props.globalRating){
          //console.log("color")
          color = {color: '#f1c40f'}
      }
      tabGlobalRating.push(<FontAwesomeIcon style={color} icon={faStar} /> )
  }

  for(var i = 0; i < 10; i++){
    var color = {}
    if(i<myRatingMovie){
        //console.log("color")
        color = {color: '#f1c40f'}
    }
    tabMyRating.push(<FontAwesomeIcon style={color} icon={faStar} /> )
}



  var ChangeColor = () => {
    if(like === true) {
      setLike(false);
    } else {
      setLike(true)
    }
  }
  var ChangeColorMovie = () => {
    if(movie === true) {
      setMovie(false);
      setcountWatchMovie(countWatchMovie + 1)
    } else {
      setMovie(true)
      setcountWatchMovie(countWatchMovie + 1)
    }
  }

  var colorLike = "";
  var colorMovie = "";

  if (movie === true) {
    colorMovie = 'red'
  } else {
    colorMovie = ""
  }

  if (like === true) {
    colorLike = 'red'
  } else {
    colorLike = ""
  }


  //console.log(myRatingMovie);


  return (
    <Col xs="12" lg="6" xl="4">
    <Card style={{marginBottom:30}}>
    <CardImg top src={props.movieImg} alt={props.movieName} />
    <CardBody>
        <p>Like <FontAwesomeIcon style={{cursor: 'pointer', color: colorLike}} icon={faHeart} onClick={() => ChangeColor()}  /></p>
        <p>Nombre de vues  <FontAwesomeIcon style={{cursor: 'pointer', color: colorMovie}} icon={faVideo} onClick={() => ChangeColorMovie()} /> <Badge color="secondary">{countWatchMovie}</Badge></p>
        <p>Mon avis 
        {tabMyRating}
        <ButtonGroup size="sm">
            <Button onClick={()=> addOne(myRatingMovie - 1)} color="secondary">-</Button>
            <Button onClick={()=> addOne(myRatingMovie + 1)} color="secondary">+</Button>
        </ButtonGroup>
        </p>
        <p>Moyenne
        {tabGlobalRating}
        ({props.globalCountRating})
        </p>
        <CardTitle>{props.movieName}</CardTitle>
        <CardText>{props.movieDesc}</CardText> 
    </CardBody>
    </Card>
    </Col>
  );
}

export default Movie;
