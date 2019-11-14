import React from 'react'
import { Link } from 'react-router-dom';

const NewspapersItem = (props) => {
    const { newspaper } = props;
    const logo = newspaper.photoUrl;

    return (
        <ul>
            <Link to={`/newspapers/${newspaper.id}`}>
                <img src={logo} width='400' height='240'/>
                <br/>
                {newspaper.title}
            </Link>
        </ul>
    )
};

export default NewspapersItem;

