import React from 'react'
import { Link } from 'react-router-dom';

const NewspapersItem = (props) => {
    const { newspaper } = props;
    const logo = newspaper.photoUrl;

    return (
        <ul>
            <Link to={`/newspapers/${newspaper.id}`}>
                <img src={logo} className='news-image'/>
                <br/>
                <p className='news-title'>{newspaper.title}</p>
            </Link>
        </ul>
    )
};

export default NewspapersItem;

