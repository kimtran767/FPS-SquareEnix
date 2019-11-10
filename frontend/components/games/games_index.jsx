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
                            {/* <li>{game.description}</li> */}
                            <li>
                                <img src={game.img_url[0]} width='100' height='100'/>
                                <img src={game.img_url[1]} width='100' height='100'/>
                            </li>

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


