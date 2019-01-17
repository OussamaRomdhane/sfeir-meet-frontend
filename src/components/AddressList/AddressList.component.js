import React, { Component } from 'react';

import './AddressList.css';

class AddressList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          {this.props.addresses.map((elem, index) => (
            <div key={index} className="cell small-6">
              <div className="card">
                <div className="card-divider">{elem}</div>
                <img
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=${elem}&zoom=12&size=600x300&maptype=roadmap&markers=color:random%7Clabel:S%7C${elem}&key=${GOOGLE_MAPS_API_KEY}`}
                />
                <button onClick={() => this.props.removeAddress(index)} className="button secondary remove-button">
                  <i className="fi-trash large" />
                  &nbsp; Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AddressList;
