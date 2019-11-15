import React from 'react';
import CreateCommentContainer from '../comment/create_comment_container';
import CommentIndex from '../comment/comment_index';


class NewspaperShow extends React.Component {

    componentDidMount() {
        this.props.fetchNewspaper(this.props.match.params.newspaperId)
        window.scrollTo(0,0)
    };

    // componentDidUpdate() {
    //     this.props.fetchNewspaper(this.props.match.params.newspaperId)
    //     // window.scrollTo(0,0)
    // };

    render() {
        if (!this.props.pulp || !this.props.newspaper) {
            return null;
        }

        const { newspaper, pulp, comment } = this.props;
        const pulpItem = pulp.map( item => {

            let photo;

            if (item.photoUrl) {
                photo = item.photoUrl;  
            } 
                return (
                    <ul className='pulp-item' key={item.key}>

                        <h2 className='pulp-title'>
                            {item.title}
                        </h2>

                        <p className='pulp-body'>{item.body}</p>
                        <img src={photo} className='newsImg'/>
                    </ul>
                )
        })

        return (
            <div className='news-show'>
                <div className='news-top'>
                    <h1>
                        {newspaper.title}
                    </h1>
                    <h3 className='news-author'>By: {newspaper.author}</h3>
                </div>

                <img className='news-main-img' src={newspaper.photoUrl}/>

                <br/><br/>

                <div className='news-body-center'>
                    <div className='news-body-none'></div>
                    <p className='news-body'>
                        {newspaper.body}
                    </p>
                    <div className='news-body-none'></div>

                </div>

                
                <div className='news-content'>

                    <div className='news-none'></div>
                    <div className='news-pulp'>

                        {pulpItem}

                        {/* <div>
                            <CreateCommentContainer />
                        </div>

                        <div>
                            {
                                comment.map(item =>
                                    <CommentIndex
                                        comment={item}
                                        key={item.id}

                                    />
                                )
                            }
                        </div> */}

                    </div>



                    <div className='news-none'></div>
                </div>

            </div>
        )
    }
};

export default NewspaperShow;