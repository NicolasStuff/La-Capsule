import React , {useState} from 'react';
import './App.css';
import { Container, Row, Button, Nav, NavItem, NavLink, Popover, PopoverHeader, ListGroupItem, ListGroup, PopoverBody  } from 'reactstrap';

import Movie from './components/Movie'

function App() {

  const [moviesCount, setmoviesCount] = useState(0);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [moviesWishList , setmoviesWishList ] = useState([]);

  var moviesData = [
    {name:"Star Wars : L'ascension de Skywalker", desc:"La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette ...", img:"/starwars.jpg", note:6.7, vote:5},
    {name:"Maléfique : Le pouvoir du mal", desc: "Plusieurs années après avoir découvert pourquoi la plus célèbre méchante Disney avait un cœur ...", img:"/maleficent.jpg", note:8.2, vote:3},
    {name:"Jumanji: The Next Level", desc: "L’équipe est de retour, mais le jeu a changé. Alors qu’ils retournent dans Jumanji pour secourir ...", img:"/jumanji.jpg", note:4, vote:5},
    {name:"Once Upon a Time... in Hollywood", desc: "En 1969, Rick Dalton – star déclinante d'une série télévisée de western – et Cliff Booth ...", img:"/once_upon.jpg", note:6, vote:7},
    {name:"La Reine des neiges 2", desc: "Elsa, Anna, Kristoff, Olaf et Sven voyagent bien au-delà des portes d’Arendelle à la recherche de réponses ...", img:"/frozen.jpg", note:4.6, vote:3},
    {name:"Terminator: Dark Fate", desc: "De nos jours à Mexico. Dani Ramos, 21 ans, travaille sur une chaîne de montage dans une usine automobile...", img:"/terminator.jpg", note:6.1, vote:1},
  ]

  var handleClickAddMovie = (name) => {
    console.log(moviesWishList)
    if(moviesWishList == []) {
        setmoviesCount(moviesCount + 1)
        setmoviesWishList( [...moviesWishList, name] );
        console.log('bonjour')
    } else {
      setmoviesCount(moviesCount - 1)
      setmoviesWishList( moviesWishList.filter((e)=>(e !== name) ));
      console.log('coucou')
    }
    //console.log(name);
}


  var movieList = moviesData.map((movie,i) => {
    return(<Movie key={i} movieName={movie.name} movieDesc={movie.desc} movieImg={movie.img} globalRating={movie.note} globalCountRating={movie.vote} handleClickAddMovieParent={handleClickAddMovie}/>)
  })

  var display = []

  for(var i = 0; i < moviesWishList.length; i++) {
    display.push(<ListGroupItem>{moviesWishList[i]}</ListGroupItem>)
  }
    const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div style={{backgroundColor:"#232528"}}>
      <Container>
        <Nav>
          <span className="navbar-brand">
            <img src="./logo.png" width="30" height="30" className="d-inline-block align-top" alt="logo" />
          </span>
          <NavItem>
            <NavLink style={{color:'white'}}>Last Releases</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
            <Button id="Popover1" type="button">
              {moviesCount} films
            </Button>
            <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
              <PopoverHeader>Whishlist</PopoverHeader>
              <PopoverBody>
                <ListGroup>
                  {display}
                </ListGroup>
              </PopoverBody>
            </Popover>
            </NavLink>
          </NavItem>
        </Nav>
        <Row>
          {movieList}
        </Row>
      </Container>
    </div>
  );
}


export default App;
