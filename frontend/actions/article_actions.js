import * as ArticleApiUtil from '../util/article_api_util';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_ARTICLE = 'FETCH_ARTICLE';

const receiveAllArticles = (articles) => ({
    type: FETCH_ARTICLES,
    articles
});

const receiveArticle = (article) => ({
    type: FETCH_ARTICLE,
    article
});

export const fetchArticles = () => dispatch => (
    ArticleApiUtil.fetchArticles()
    .then( articles => dispatch(recieveAllArticles(articles)))
);

export const fetchArticle = (articleId) => dispatch => (
    ArticleApiUtil.fetchArticle(articleId)
    .then( article => dispatch(receiveArticle(article)))
);



