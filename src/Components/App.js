import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../Redux/actions';
import {withRouter} from 'react-router';

function mapStateToProps(state){
    return {
        posts : state.posts,
        comments: state.comments
    }
}

// Container should know about redux and dispatch
// VVOptional but important shortens things in the presentational component
function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App