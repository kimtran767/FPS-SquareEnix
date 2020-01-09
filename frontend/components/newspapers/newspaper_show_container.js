import { connect } from 'react-redux';
import { fetchNewspaper } from '../../actions/newspaper_actions';
import NewspaperShow from './newspaper_showpage';
// import { fetchComment } from '../../actions/comment_actions'

const filterEntities = (recipeComponents, recipeId) => {
  let filteredComponents = [];
  for (const componentId in recipeComponents) {
    if (recipeComponents[componentId]["recipeId"] === parseInt(recipeId)) {
      filteredComponents.push(recipeComponents[componentId]);
    }
  }
  return filteredComponents;
};


const mstp = (state, ownProps) => {

    return ({
        newspaper: state.entities.newspapers[ownProps.match.params.newspaperId],
        pulp: Object.values(state.entities.pulps),
        comment: Object.values(state.entities.comments)

    })
};

const mdtp = dispatch => ({
    fetchNewspaper: newspaperId => dispatch(fetchNewspaper(newspaperId)),
    // fetchComment: commentId => dispatch(fetchComment(commentId))
});

export default connect(mstp, mdtp)(NewspaperShow);