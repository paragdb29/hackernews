import { connect } from 'react-redux';
import actions from '../../store/detail/actions';
import DetailView from './DetailView'

const mapStateToProps = state => ({
  comments : state.details.comments,
  isFetching : state.details.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchComments: (commentIds) => dispatch(actions.fetchTopComments(commentIds))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailView)