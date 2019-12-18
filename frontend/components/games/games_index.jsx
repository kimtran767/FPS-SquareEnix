import * as React from 'react';
import { Link } from 'react-router-dom';
import GameItem from './game_item';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
          <Carousel>
            {games.map(game => (
              <img src={game.photoUrls[0]} />
            ))}
          </Carousel>
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

export default GamesIndex;





