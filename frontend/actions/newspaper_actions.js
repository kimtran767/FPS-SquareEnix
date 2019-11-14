import * as NewspaperApiUtil from '../util/newspaper_api_util';

export const FETCH_NEWSPAPERS = 'FETCH_NEWSPAPERS';
export const FETCH_NEWSPAPER= 'FETCH_NEWSPAPER';

const receiveAllNewspapers = (newspapers) => ({
    type: FETCH_NEWSPAPERS,
    newspapers
});

const receiveNewspaper = (payload) => ({
    type: FETCH_NEWSPAPER,
    payload
});

export const fetchNewspapers = () => dispatch => (
    NewspaperApiUtil.fetchNewspapers()
    .then( newspapers => dispatch(receiveAllNewspapers(newspapers)))
);

export const fetchNewspaper = (newspaperId) => dispatch => (
    NewspaperApiUtil.fetchNewspaper(newspaperId)
    .then( newspaper => dispatch(receiveNewspaper(newspaper)))
);



