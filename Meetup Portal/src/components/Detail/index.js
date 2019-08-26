import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCityData } from '../../reducers/cityDataReducer';

class Detail extends Component {
  componentDidMount() {
    loadCityData();
  }

  render() {
    const { cityData } = this.props;
    return (
      <>
        {cityData && cityData.city ? (
          <div className='city-box'>
            <div>{cityData.city.city}</div>
            <div>
              {/* {cityData.events.map(event => (
                <> */}
              <div>title: {cityData.events[0].group.name}</div>
              <div>join: {cityData.events[0].group.join_mode}</div>
              <div>description: {cityData.events[0].description}</div>
              {/* </>
              ))} */}
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = ({ cityData }) => ({ cityData });
const mapDispatchToProps = { loadCityData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
