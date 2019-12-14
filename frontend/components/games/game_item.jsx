import React from 'react';
import { Link } from 'react-router-dom';

const GameItem = (props) => {

    const { game } = props;
    let logo = game.photoUrls[0];

    return (
        
        <ul className='game-item'>
            <Link to={`/games/${game.id}`}>
                <img className='game-img' src={logo} width='520' height='300'/>
                <br/>
                {game.title}
            </Link >
        </ul>

    )

};

export default GameItem;