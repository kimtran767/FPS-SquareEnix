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
        let logo = game.photoUrls[0]
        let main = game.photoUrls[1]
        let last = game.photoUrls[2]
        let styleLogo={
            backgroundImage: `url(${logo})`
        }

        let styleMain={
            backgroundImage: `url(${main})`
        }

        let styleLast={
            backgroundImage: `url(${last})`
        }

        let gameItem = game.photoUrls.slice(3).map(item => (
            <li key={item.key}>
                <img src={item} width='420' height='210'/>
            </li>

        ))

        return(
            <div className='game-show-back'>
                    
                <div className='game-show-logo' style={styleLogo}>
                    
                    {/* <div className='game-opa'> */}
                        <div className='game-opa-logo'>

                        </div>
                        <div className='game-title'>
                                <h1>{game.title}</h1>
                        </div>
                        
                    {/* </div> */}


                </div>

                <div className='game-show-main' style={styleMain}>

                    <div className='game-opa-main'></div>

                    <div className='game-show-body'>
                        <div className='game-show-body-none'></div>
                        <div className='game-show-text'>

                            {game.description}

                        </div>
                        <div className='game-show-body-none'></div>
                    </div>
                    
                </div>

                <div className='game-show-media' style={styleLast}>
                    <div className='game-opa-last'></div>
                    <div className='game-media-top'>
                        <ul className='game-media-item'>
                                {gameItem}
                        </ul>
                    </div>

                </div>
            </div>

        ) 
    }
}



export default GameShow;


{/* <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CKrWp7dreKs?start=4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
{/* <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CKrWp7dreKs?start=4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
