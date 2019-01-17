import React, { Component } from 'react';

class AddAddress extends Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.address.trim().length > 5) {
      this.props.addAddress(this.state.address);
      this.setState({ address: '' });
    }
  }
  handleChange(event) {
    this.setState({
      address: event.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell small-8">
              <input
                onChange={this.handleChange}
                value={this.state.address}
                type="text"
                placeholder="Nouvelle adresse"
              />
            </div>
            <div className="cell small-4">
              <button onClick={this.handleClick} type="submit" className="button add-button">
                <i className="fi-plus large" /> Ajouter
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default AddAddress;
