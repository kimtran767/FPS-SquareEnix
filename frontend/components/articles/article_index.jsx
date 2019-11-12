import React from 'react';

class ArticleIndex extends React.Component {

    componentDidMount() {
        this.props.fetchArticles()
    }

    render() {

        return (
            <div>Testing Article Index</div>
        )
    }


};

export default ArticleIndex;