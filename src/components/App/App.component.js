import React, { Component } from 'react';

import VisibleAddresses from '../VisibleAddresses/VisibleAddresses.component';
import VisibleAddAddress from '../VisibleAddAddress/VisibleAddAddress.component';
import VisibleRecommendations from '../VisibleRecommendations/VisibleRecommendations.component';

import '../../../assets/css/foundation.min.css';
import '../../../assets/css/foundation-icons.css';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="title">
          SFEIR<small>Meet</small>
        </h1>
        <VisibleAddAddress />
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell small-6">
              <VisibleAddresses />
            </div>
            <div className="cell small-6">
              <VisibleRecommendations />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
