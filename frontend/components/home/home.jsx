import React from 'react';
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
                    <div className='home-list-game'>
                        {
                            games.slice(0, 6).map(game =>
                                    <Link to={`/games/${game.id}`}>
                                        <img className='home-img-game' src={game.photoUrls[0]}/>
                                    </Link >
                            )
                        }
                    </div>
                    <div className='view-more'>
                        <Link  className='home-bot' to="/games">More Games</Link>
                    </div>
                </div>
                <div className='home-news'>
                    <div className='home-title'>NEWS</div>
                    <div className='home-list-news'>
                        {
                            news.slice(0, 3).map(item =>
                                <ul>
                                    <Link to={`/newspapers/${item.id}`}>
                                        <img className='home-img-news' src={item.photoUrl}/>
                                        <br />
                                        {item.title}
                                    </Link >
                                </ul>
                            )
                        }
                    </div>
                    <div className='view-more'>
                        <Link className='home-bot' to="/newspapers">More News</Link>
                    </div>
                </div>
                
            </div>


        )
    }
};


export default Home;