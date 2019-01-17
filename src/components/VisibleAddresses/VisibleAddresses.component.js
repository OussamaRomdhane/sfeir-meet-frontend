import { connect } from 'react-redux';
import { initAddresses, removeAddress } from '../../actions/Address.action';
import AddressList from '../AddressList/AddressList.component';

const mapStateToProps = state => {
  return {
    addresses: state.addresses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initAddresses: (addresses = []) => dispatch(initAddresses(addresses)),
    removeAddress: index => dispatch(removeAddress(index)),
  };
};

const VisibleAddresses = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressList);

export default VisibleAddresses;
