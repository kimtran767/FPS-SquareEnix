import * as React from 'react';
import { Link } from 'react-router-dom';
import GameItem from './game_item';
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

class GamesIndex extends React.Component {
 
  componentDidMount() {
    this.props.fetchGames();
    window.scrollTo(0, 0);
  }

  render() {
    const { games } = this.props;


    return (
      <div className='game-index'>
        <div className='game-slide'>
          {/* <Carousel>
            {games.map(game => (
              <img src={game.photoUrls[0]} />
            ))}
          </Carousel> */}

          {/* 
          {games.map(game => (
            <Link to={`/games/${game.id}`}>
              <CarouselImage key={game.id} source={game.photoUrls[0]} />
            </Link>
          ))} */}
          {/* {games.map(game => (
            <Link to={`/games/${game.id}`}>
              {/* <CarouselImage key={game.id} source={game.photoUrls[0]} /> */}
          {/* <img src={game.photoUrls[0]} width='100%' height='800vh'/>
            </Link> */}
          {/* ))} */}
        </div>

        <div className='game-content'>
          {games.map(game => (
            <GameItem game={game} key={game.id} />
          ))}
        </div>
      </div>
    );
  }
};

// const styles = StyleSheet.create({
//   backgroundImage: {
//     height: "100%",
//     width: DEVICE_WIDTH
//   }
// });



export default GamesIndex;





