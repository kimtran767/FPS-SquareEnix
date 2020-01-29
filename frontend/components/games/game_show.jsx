import React from 'react';

class GameShow extends React.Component {

    constructor(props) {
      super(props);
      this.props.closeModal();
    }

    componentDidMount() {
        this.props.fetchGame(this.props.match.params.gameId)
        window.scrollTo(0, 0)
    };

    render() {
        if (!this.props.game ) {
            return null;
        }
        
        const { game } = this.props;
        let logo = game.photoUrls[0]
        let styleLogo={
            backgroundImage: `url(${logo})`
        }

        let gameItem = game.photoUrls.slice(3).map(item => (
            <li key={item.key}>
                <img src={item} className='game-img'/>
            </li>

        ))

        return (
          <div className='game-show'>
            <div className='game-show-logo' style={styleLogo}>
            </div>

            <div className='game-show-text'>
              <h1>{game.title}</h1>
              <br/>
              {game.description}
            </div>

            <div className='game-show-media'>
                <h2>MEDIA</h2>
              <ul className='game-media-item'>{gameItem}</ul>
            </div>
          </div>
        ); 
    }
}



export default GameShow;

