import { connect } from 'react-redux';
import { toggleFilter } from '../../actions/Filter.action';
import Recommendations from '../Recommendations/Recommendations.component';

const mapStateToProps = state => ({
  addresses: state.addresses,
  filters: state.filters,
  recommendations: state.recommendations,
});

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: index => dispatch(toggleFilter(index)),
  };
};

const VisibleRecommendations = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommendations);

export default VisibleRecommendations;
