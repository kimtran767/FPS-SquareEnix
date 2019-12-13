import React from 'react';
// import NewspapersContainer from '../newspapers/newspapers_container';
// import GamesContainer from '../games/games_container';
import GameItem from '../games/game_item';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchGames();
        this.props.fetchNewspapers();
        window.scrollTo(0, 0)
    }

    render() {

        if (!this.props.games) {
            return null;
        }

        const { games, news } = this.props;

        return (

            <div className='home'>
                <div className='home-game'>
                    <div className='home-title'>Games</div>
                    <div className='home-list'>
                        {
                            games.map(game =>
                                <ul>
                                    <Link to={`/games/${game.id}`}>
                                        <img className='home-img' src={game.photoUrls[0]} width='400' height='240' />
                                        <br />
                                        {game.title}
                                    </Link >
                                </ul>
                            )
                        }
                    </div>
                    <div className='view-more'>
                        <Link  className='home-bot' to="/games">View More Games</Link>

                    </div>

                    <div className='home-title'>News</div>
                    <div className='home-list'>
                        {
                            news.map(item =>
                                <ul>
                                    <Link to={`/newspapers/${item.id}`}>
                                        <img className='home-img' src={item.photoUrl} width='400' height='240' />
                                        <br />
                                        {item.title}
                                    </Link >
                                </ul>
                            )
                        }
                    </div>
                    
                    <div className='view-more'>
                        <Link className='home-bot' to="/newspapers">View More News</Link>

                    </div>
                </div>
            </div>


        )
    }
};


export default Home;