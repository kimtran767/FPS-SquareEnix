import { connect } from 'react-redux';
import { fetchNewspaper } from '../../actions/newspaper_actions';
import NewspaperShow from './newspaper_showpage';


const mstp = (state, ownProps) => {

    // const pulp = Object.values(state.entities.pulps)
    
    // debugger
    return ({
        newspaper: state.entities.newspapers[ownProps.match.params.newspaperId],
        pulp: Object.values(state.entities.pulps)


    })
};

const mdtp = dispatch => ({
    fetchNewspaper: newspaperId => dispatch(fetchNewspaper(newspaperId))
});

export default connect(mstp, mdtp)(NewspaperShow);