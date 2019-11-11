import React from 'react';
import { Link } from 'react-router-dom';


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

                <div className='game-square'>

                    <div className='game-text'>

                        {
                            games.map(game => (
                                <li key={game.id}>
                                    <Link to={`/games/${game.id}`}>{game.title}</Link>
                                </li>
                            ))
                        }
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus impedit asperiores error dolore itaque nemo ab delectus, eligendi quas voluptates excepturi ratione sit voluptatibus modi dolor ducimus atque. Numquam enim, in a nostrum harum nulla error tenetur at veniam consequatur earum amet. Voluptatum architecto sed ipsam minima fuga pariatur perspiciatis accusantium illum eius veritatis rem sunt deserunt temporibus quos minus velit nesciunt exercitationem, voluptatibus rerum maiores laborum ipsum, quibusdam blanditiis quis? Veritatis iusto beatae alias a saepe exercitationem in! Similique amet eos, dolore dolores nobis inventore ab explicabo deserunt odio necessitatibus quidem numquam, recusandae neque, excepturi reiciendis dolorum reprehenderit.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus impedit asperiores error dolore itaque nemo ab delectus, eligendi quas voluptates excepturi ratione sit voluptatibus modi dolor ducimus atque. Numquam enim, in a nostrum harum nulla error tenetur at veniam consequatur earum amet. Voluptatum architecto sed ipsam minima fuga pariatur perspiciatis accusantium illum eius veritatis rem sunt deserunt temporibus quos minus velit nesciunt exercitationem, voluptatibus rerum maiores laborum ipsum, quibusdam blanditiis quis? Veritatis iusto beatae alias a saepe exercitationem in! Similique amet eos, dolore dolores nobis inventore ab explicabo deserunt odio necessitatibus quidem numquam, recusandae neque, excepturi reiciendis dolorum reprehenderit.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus impedit asperiores error dolore itaque nemo ab delectus, eligendi quas voluptates excepturi ratione sit voluptatibus modi dolor ducimus atque. Numquam enim, in a nostrum harum nulla error tenetur at veniam consequatur earum amet. Voluptatum architecto sed ipsam minima fuga pariatur perspiciatis accusantium illum eius veritatis rem sunt deserunt temporibus quos minus velit nesciunt exercitationem, voluptatibus rerum maiores laborum ipsum, quibusdam blanditiis quis? Veritatis iusto beatae alias a saepe exercitationem in! Similique amet eos, dolore dolores nobis inventore ab explicabo deserunt odio necessitatibus quidem numquam, recusandae neque, excepturi reiciendis dolorum reprehenderit.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus impedit asperiores error dolore itaque nemo ab delectus, eligendi quas voluptates excepturi ratione sit voluptatibus modi dolor ducimus atque. Numquam enim, in a nostrum harum nulla error tenetur at veniam consequatur earum amet. Voluptatum architecto sed ipsam minima fuga pariatur perspiciatis accusantium illum eius veritatis rem sunt deserunt temporibus quos minus velit nesciunt exercitationem, voluptatibus rerum maiores laborum ipsum, quibusdam blanditiis quis? Veritatis iusto beatae alias a saepe exercitationem in! Similique amet eos, dolore dolores nobis inventore ab explicabo deserunt odio necessitatibus quidem numquam, recusandae neque, excepturi reiciendis dolorum reprehenderit.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus impedit asperiores error dolore itaque nemo ab delectus, eligendi quas voluptates excepturi ratione sit voluptatibus modi dolor ducimus atque. Numquam enim, in a nostrum harum nulla error tenetur at veniam consequatur earum amet. Voluptatum architecto sed ipsam minima fuga pariatur perspiciatis accusantium illum eius veritatis rem sunt deserunt temporibus quos minus velit nesciunt exercitationem, voluptatibus rerum maiores laborum ipsum, quibusdam blanditiis quis? Veritatis iusto beatae alias a saepe exercitationem in! Similique amet eos, dolore dolores nobis inventore ab explicabo deserunt odio necessitatibus quidem numquam, recusandae neque, excepturi reiciendis dolorum reprehenderit.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus impedit asperiores error dolore itaque nemo ab delectus, eligendi quas voluptates excepturi ratione sit voluptatibus modi dolor ducimus atque. Numquam enim, in a nostrum harum nulla error tenetur at veniam consequatur earum amet. Voluptatum architecto sed ipsam minima fuga pariatur perspiciatis accusantium illum eius veritatis rem sunt deserunt temporibus quos minus velit nesciunt exercitationem, voluptatibus rerum maiores laborum ipsum, quibusdam blanditiis quis? Veritatis iusto beatae alias a saepe exercitationem in! Similique amet eos, dolore dolores nobis inventore ab explicabo deserunt odio necessitatibus quidem numquam, recusandae neque, excepturi reiciendis dolorum reprehenderit.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus impedit asperiores error dolore itaque nemo ab delectus, eligendi quas voluptates excepturi ratione sit voluptatibus modi dolor ducimus atque. Numquam enim, in a nostrum harum nulla error tenetur at veniam consequatur earum amet. Voluptatum architecto sed ipsam minima fuga pariatur perspiciatis accusantium illum eius veritatis rem sunt deserunt temporibus quos minus velit nesciunt exercitationem, voluptatibus rerum maiores laborum ipsum, quibusdam blanditiis quis? Veritatis iusto beatae alias a saepe exercitationem in! Similique amet eos, dolore dolores nobis inventore ab explicabo deserunt odio necessitatibus quidem numquam, recusandae neque, excepturi reiciendis dolorum reprehenderit.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus impedit asperiores error dolore itaque nemo ab delectus, eligendi quas voluptates excepturi ratione sit voluptatibus modi dolor ducimus atque. Numquam enim, in a nostrum harum nulla error tenetur at veniam consequatur earum amet. Voluptatum architecto sed ipsam minima fuga pariatur perspiciatis accusantium illum eius veritatis rem sunt deserunt temporibus quos minus velit nesciunt exercitationem, voluptatibus rerum maiores laborum ipsum, quibusdam blanditiis quis? Veritatis iusto beatae alias a saepe exercitationem in! Similique amet eos, dolore dolores nobis inventore ab explicabo deserunt odio necessitatibus quidem numquam, recusandae neque, excepturi reiciendis dolorum reprehenderit.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus impedit asperiores error dolore itaque nemo ab delectus, eligendi quas voluptates excepturi ratione sit voluptatibus modi dolor ducimus atque. Numquam enim, in a nostrum harum nulla error tenetur at veniam consequatur earum amet. Voluptatum architecto sed ipsam minima fuga pariatur perspiciatis accusantium illum eius veritatis rem sunt deserunt temporibus quos minus velit nesciunt exercitationem, voluptatibus rerum maiores laborum ipsum, quibusdam blanditiis quis? Veritatis iusto beatae alias a saepe exercitationem in! Similique amet eos, dolore dolores nobis inventore ab explicabo deserunt odio necessitatibus quidem numquam, recusandae neque, excepturi reiciendis dolorum reprehenderit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus impedit asperiores error dolore itaque nemo ab delectus, eligendi quas voluptates excepturi ratione sit voluptatibus modi dolor ducimus atque. Numquam enim, in a nostrum harum nulla error tenetur at veniam consequatur earum amet. Voluptatum architecto sed ipsam minima fuga pariatur perspiciatis accusantium illum eius veritatis rem sunt deserunt temporibus quos minus velit nesciunt exercitationem, voluptatibus rerum maiores laborum ipsum, quibusdam blanditiis quis? Veritatis iusto beatae alias a saepe exercitationem in! Similique amet eos, dolore dolores nobis inventore ab explicabo deserunt odio necessitatibus quidem numquam, recusandae neque, excepturi reiciendis dolorum reprehenderit.

                        
                    </div>

                </div>
               
            </div>
        )
    }
};



export default GamesIndex;


