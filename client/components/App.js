import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// takes whatever lives in store or state and maps them
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

// passes the actionCreators via props and dispatch to surface data
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// this connect needs two things: mapStateToProps (props) and mapDispatchToProps (state),
// which are surfaced via props from the action creators
const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

// makes it available to the other JS files that import it
export default App;
