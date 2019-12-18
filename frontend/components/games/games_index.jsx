import * as React from 'react';
import { Link } from 'react-router-dom';
import GameItem from './game_item';

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
          <View style={{ height: "100%", width: "100%" }}>

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





