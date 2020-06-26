import React from 'react';
import './App.css';
import { Nav, NavItem, NavLink, Container, Row} from 'reactstrap';
import Movie from './movie'

var movieData = [
  {name:"Star Wars, l'ascension de Skywalker", desc:"La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette bataille épique pour la liberté.", img:"./starwars.jpg", note:5, vote:5},
  {name:"Maléfique : Le pouvoir du mal", desc:"Plusieurs années après avoir découvert pourquoi la plus célèbre méchante Disney avait un cœur si dur et ce qui l’avait conduit à jeter un terrible sort à la princesse Aurore, « Maléfique : Le Pouvoir du Mal » continue d’explorer les relations complexes entre la sorcière et la future reine, alors qu’elles nouent d’autres alliances et affrontent de nouveaux adversaires dans leur combat pour protéger leurs terres et les créatures magiques qui les peuplent.", img:"./maleficent.jpg", note:10, vote:3},
  {name:"Jumanji : The Next Level", desc:"L'équipe est de retour mais le jeu a changé. Alors qu'ils retournent dans Jumanji pour secourir l'un des leurs, ils découvrent un monde totalement inattendu. Des déserts arides aux montagnes enneigées, les joueurs vont devoir braver des espaces inconnus et inexplorés, afin de sortir du jeu le plus dangereux du monde.", img:"./jumanji.jpg", note:0, vote:8},
  {name:"Once upon a time... in Hollywood", desc:"En 1969, la star de télévision Rick Dalton et le cascadeur Cliff Booth, sa doublure de longue date, poursuivent leurs carrières au sein d’une industrie qu’ils ne reconnaissent plus.", img:"once_upon.jpg", note:0, vote:6},
  {name:"La reine des neiges 2", desc:"Pourquoi Elsa est-elle née avec des pouvoirs magiques ? La jeune fille rêve de l’apprendre, mais la réponse met son royaume en danger. Avec l’aide d’Anna, Kristoff, Olaf et Sven, Elsa entreprend un voyage aussi périlleux qu’extraordinaire. Dans La Reine des neiges, Elsa craignait que ses pouvoirs ne menacent le monde. Dans La Reine des neiges 2, elle espère qu’ils seront assez puissants pour le sauver…", img:"./frozen.jpg", note:0, vote:5},
  {name:"Terminator : Dark Fate", desc:"De nos jours à Mexico. Dani Ramos, 21 ans, travaille sur une chaîne de montage dans une usine automobile. Celle-ci voit sa vie bouleversée quand elle se retrouve soudainement confrontée à 2 inconnus : d’un côté Gabriel, une machine Terminator des plus évoluées, indestructible et protéiforme, un « Rev-9 », venue du futur pour la tuer ; de l’autre Grace, un super-soldat génétiquement augmenté, envoyée pour la protéger. Embarquées dans une haletante course-poursuite à travers la ville, Dani et Grace ne doivent leur salut qu’à l’intervention de la redoutable Sarah Connor, qui, avec l’aide d’une source mystérieuse, traque les Terminators depuis des décennies. Déterminées à rejoindre cet allié inconnu au Texas, elles se mettent en route, mais le Terminator Rev-9 les poursuit sans relâche, de même que la police, les drones et les patrouilles frontalières… L’enjeu est d’autant plus grand que sauver Dani, c’est sauver l’avenir de l’humanité.", img:"./terminator.jpg", note:0, vote:2}]

var MovieList = [];
for(var i=0; i<movieData.length; i++){
  MovieList.push(<Movie movieName={movieData[i].name} movieDesc={movieData[i].desc} movieImg={movieData[i].img} movieNote={movieData[i].note} movieVote={movieData[i].vote}/>);
} 

function App() {
  return (
    <div>
      <div>
        <Nav>
          <NavItem>
          <NavLink href="#">
            <img src='./logo.png' alt=""></img>
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Last Releases</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">11 Movies</NavLink>
          </NavItem>
        </Nav>
      </div>
      <Container>
        <Row>
          {MovieList}
        </Row>
      </Container>
      </div>
  );
}

export default App;
