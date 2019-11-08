import React from 'react';
import GameIndexItem from './game_index_item';

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

            <div>
                {
                    games.map(game => (

                        <div>
                            <li>{game.title}</li>
                            <li>{game.description}</li>

                        </div>
                        
                        
                    ))
                }

            </div>

            // <div>
            //     <h2>Game Index</h2>
            //     <ul>
            //         {
            //             games.map(game => 
            //                    <li>
            //                         <GameIndexItem
            //                             game={game}
            //                             key={game.id}
            //                         />   
            //                    </li> 
            //                 )
            //         }
            //     </ul>
            // </div>
        )
    }
};


export default GamesIndex;


