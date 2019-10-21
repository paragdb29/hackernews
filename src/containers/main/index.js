import { connect } from 'react-redux';
import actions from '../../store/main/actions';
import MainView from './MainView'

const mapStateToProps = state => ({
  storyIds : state.main.storyIds,
  stories : state.main.stories,
  noOfStories : state.main.noOfStories,
  isFetching : state.main.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchStories: () => dispatch(actions.fetchStories())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView)