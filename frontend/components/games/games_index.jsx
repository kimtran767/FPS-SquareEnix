import React from 'react';
import { Link } from 'react-router-dom';
import GameItem from './game_item';


class GamesIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchGames();
    }

    render() {

        
        const { games } = this.props;

        return (

            <div className='game-index'>

                <div className='game-flex'>
                    <div className='game-flex-1'></div>
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
                    <div className='game-flex-1'></div>
                </div>
               
                
            </div>
        )
    }
};



export default GamesIndex;





