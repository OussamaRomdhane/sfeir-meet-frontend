import { connect } from 'react-redux';

import { addAddress } from '../../actions/Address.action';
import { setRecommendations } from '../../actions/Recommendation.action';

import AddAddress from '../AddAddress/AddAddress.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    addAddress: address => dispatch(addAddress(address)),
    setRecommendations: recommendations => dispatch(setRecommendations(recommendations)),
  };
};

const VisibleAddAddress = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAddress);

export default VisibleAddAddress;
