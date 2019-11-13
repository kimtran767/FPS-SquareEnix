import React from 'react'
import { Link } from 'react-router-dom';

const NewspapersItem = (props) => {
    const { newspaper } = props;

    return (
        <ul>
            {/* <Link to={`/api/articles/${article.id}`}> */}
                {newspaper.title}
                <br/>
                {newspaper.date}
            {/* </Link> */}
        </ul>
    )
};

export default NewspapersItem;

