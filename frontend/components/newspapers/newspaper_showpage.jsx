import React from 'react';
import CreateCommentContainer from '../comment/create_comment_container';
import CommentIndex from '../comment/comment_index'

class NewspaperShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllComment();
    this.props.fetchNewspaper(this.props.match.params.newspaperId)
    window.scrollTo(0, 0);
  }

  render() {
    if (!this.props.pulp || !this.props.newspaper || !this.props.comment) {
      return null;
    }

    const { newspaper, pulp, comment } = this.props;
    const pulpItem = pulp.map(item => {
      let photo;

        if (item.photoUrl) {
          photo = item.photoUrl;
        }
        return (
          <ul className='pulp-item' key={item.key}>
            <h2 className='pulp-title'>{item.title}</h2>

            <p className='pulp-body'>{item.body}</p>
            <img src={photo} className='newsImg' />
          </ul>
        );
    });

    let newsComment = comment.map(review => {
      let listComment = [];

      if (review.news_id === newspaper.id) {
        listComment.push(review)
      }

      return listComment;
    })

    return (
      <div className='news-show'>
        <div className='news-top'>
          <h1>{newspaper.title}</h1>
          <h3 className='news-author'>By: {newspaper.author}</h3>
        </div>

        <img className='news-main-img' src={newspaper.photoUrl} />

        <br />
        <br />

        <div className='news-body-center'>
          <p className='news-body'>{newspaper.body}</p>
        </div>

        <div className='news-content'>
          <div className='news-pulp'>{pulpItem}</div>

          <div className='comment-box'>
            <CreateCommentContainer news={newspaper.id} />
          </div>

          <div className='news-comment-list'>

            {newsComment.map(item => {
              if (item.length === 1) {
                return <CommentIndex 
                comment={item[0]} 
                />
                
                // <li key={item.id}>{item[0].body}</li>
              }
            })}

          </div>
        </div>
      </div>
    );
  }
};

export default NewspaperShow;