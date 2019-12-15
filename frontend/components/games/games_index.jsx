import React from 'react';
import { Link } from 'react-router-dom';
import GameItem from './game_item';


class GamesIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchGames();
        window.scrollTo(0, 0)
    }

    

    render() {   
        const { games } = this.props;
        return (
          <div className='game-index'>
            <div className='game-slide'>
                <figure>
                  {games.map(game => (
                  <Link to={`/games/${game.id}`}>
                      <img className='slide-img' 
                            src={game.photoUrls[0]}
                            width='1680'
                            height='700'
                      />
                  </Link> 
                  ))}
              </figure>
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





