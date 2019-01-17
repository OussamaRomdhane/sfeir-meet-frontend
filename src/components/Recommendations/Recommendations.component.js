import React, { Component } from 'react';
import ReactTable from 'react-table';
import ReactStars from 'react-stars';
import './Recommendations.css';

const StreetView = props => {
  const {
    location: { lat, lon },
  } = props.original;
  return (
    <a target="_blank" href={`https://www.google.com/maps/?cbll=${lat},${lon}&layer=c&cbp=11,90,0,0,0`}>
      <img
        title="See on Google Maps"
        src={`https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${lat},${lon}&key=${GOOGLE_MAPS_API_KEY}`}
      />
    </a>
  );
};

const StaticMap = props => {
  const {
    location: { lat, lon },
  } = props.original;
  return (
    <a target="_blank" href={`https://www.google.com/maps/?daddr=${lat},${lon}`}>
      <img
        title="Get directions"
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=17&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${lon}&key=${GOOGLE_MAPS_API_KEY}`}
      />
    </a>
  );
};

const PlaceInfo = props => {
  const { name, rating } = props.original;
  return (
    <div>
      <p className="business-name-p">{name}</p>
      {rating.count ? (
        <div className="rating-p" title={rating.value}>
          <ReactStars edit={false} value={rating.value} count={5} />
          <span>{rating.count}</span>
        </div>
      ) : (
        <p />
      )}
    </div>
  );
};

class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.filtersList = [
      { label: 'Bars', key: 'bar' },
      { label: 'Restaurants', key: 'restaurant' },
      { label: 'Cafes', key: 'cafe' },
      { label: 'Parks', key: 'park' },
    ];
    this.toogleFilter = this.toogleFilter.bind(this);
  }
  toogleFilter(filter) {
    this.props.toggleFilter(filter);
  }
  render() {
    const { addresses, recommendations, filters } = this.props;
    const columns = [
      {
        Cell: PlaceInfo,
      },
      {
        Cell: StreetView,
      },
      {
        Cell: StaticMap,
      },
    ];
    const data = this.props.recommendations
      .filter(recommendation => filters.includes(recommendation.type))
      .reduce((acc, val) => {
        val.places.forEach(place => {
          acc.push(place);
        });
        return acc;
      }, []);
    return addresses.length && recommendations.length ? (
      <div>
        <center>
          <div className="expanded button-group">
            {this.filtersList.map(({ label, key }) => (
              <a
                key={key}
                className={'button ' + (this.props.filters.includes(key) ? 'primary' : 'secondary')}
                onClick={() => this.toogleFilter(key)}
              >
                {label}
              </a>
            ))}
          </div>
        </center>
        <ReactTable
          noDataText="🤦🤦🤦🤦🤦🤦🤦🤦🤦🤦🤦🤦🤦🤦🤦🤦🤦🤦🤦🤦🤦🤦"
          pageSize={3}
          data={data}
          columns={columns}
        />
      </div>
    ) : (
      <div />
    );
  }
}

export default Recommendations;
