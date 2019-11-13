import * as ArticleApiUtil from '../util/newspaper_api_util';

export const FETCH_NEWSPAPERS = 'FETCH_NEWSPAPERS';
export const FETCH_NEWSPAPER= 'FETCH_NEWSPAPER';

const receiveAllNewspapers = (newspapers) => ({
    type: FETCH_NEWSPAPERS,
    newspapers
});

const receiveNewspaper = (newspaper) => ({
    type: FETCH_NEWSPAPER,
    newspaper
});

export const fetchNewspapers = () => dispatch => (
    ArticleApiUtil.fetchNewspapers()
    .then( newspapers => dispatch(receiveAllNewspapers(newspapers)))
);

export const fetchNewspaper = (newspaperId) => dispatch => (
    ArticleApiUtil.fetchNewspaper(newspaperId)
    .then( newspaper => dispatch(receiveNewspaper(newspaper)))
);



