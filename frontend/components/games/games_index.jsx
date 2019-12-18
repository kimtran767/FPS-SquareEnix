import React from 'react';
import GameItem from './game_item';
import Slider from "react-slick";
import { Link } from "react-router-dom";



class GamesIndex extends React.Component {
 
  componentDidMount() {
    this.props.fetchGames();
    window.scrollTo(0, 0);
  }

  render() {
    const { games } = this.props;

        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 8000,
          cssEase: "linear"
        };

    return (
      <div className='game-index'>
        <div className='game-slide'>
          <Slider {...settings}>
              {games.map(game => (
                <Link to={`/games/${game.id}`}>
                  <img src={game.photoUrls[0]} />
                </Link>
              ))}
          </Slider>
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





