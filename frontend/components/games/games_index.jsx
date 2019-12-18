import React from 'react';
import GameItem from './game_item';
import Slider from "react-slick";
import { Link } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import '../../../node_modules/slick-carousel/slick/slick.css'
// import '../../../node_modules/slick-carousel/slick/slick-theme.css'


class GamesIndex extends React.Component {
 
  componentDidMount() {
    this.props.fetchGames();
    window.scrollTo(0, 0);
  }

  render() {
    const { games } = this.props;

        // const settings = {
        //   dots: true,
        //   infinite: true,
        //   slidesToShow: 1,
        //   slidesToScroll: 1,
        //   autoplay: true,
        //   speed: 2000,
        //   autoplaySpeed: 2000,
        //   cssEase: "linear"
        // };
            const settings = {
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1
            };


    return (
      <div className='game-index'>
        <div >
          <Slider {...settings}>
              {games.map(game => (
            <div>
              <Link to={`/games/${game.id}`}>
                <img src={game.photoUrls[0]} />
              </Link>
            </div>
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





