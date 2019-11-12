import React from 'react';

class GameShow extends React.Component {

    componentDidMount() {
        this.props.fetchGame(this.props.match.params.gameId)
    };

    render() {
        if (!this.props.game ) {
            return null;
        }
        const { game } = this.props;
        let photourl = game.photoUrls[0]
        let style={
            backgroundImage: `url(${photourl})`
        }
        return(
            <div>

                <div className='testing' style={style}>
                    <h1>{game.title}</h1>
                    <p>{game.description}</p>
                </div>
                
            </div>

        ) 
    }
}



export default GameShow;

