import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/article_actions';
import ArticleIndex from './article_index';

const mstp = (state) => ({
    articles: Object.values(state.entities.articles)
    
});

const mdtp = (dispatch) => ({
    fetchArticles: () => dispatch(fetchArticles)
});

export default connect(mstp, mdtp)(ArticleIndex)
