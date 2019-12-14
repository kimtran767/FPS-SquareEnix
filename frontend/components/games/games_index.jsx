import React from 'react';
import { Link } from 'react-router-dom';
import GameItem from './game_item';
import * as Carousel from 'carousel-js';


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
                    <div className='game-content'>
                        {
                            games.map(game =>
                                <GameItem
                                    game={game}
                                    key={game.id}
                                />
                            )
                        }                  
                    </div>    
            </div>
        )
    }
};



export default GamesIndex;





