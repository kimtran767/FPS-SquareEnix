import React from 'react';

class GameShow extends React.Component {

    componentDidMount() {
        this.props.fetchGame(this.props.game.id)
    };

    render() {
        const { game } = this.props;

        return(
            <div>
                <h1>{game.title}</h1>
                <p>{game.description}</p>
            </div>
        ) 
    }
}

export default GameShow;

