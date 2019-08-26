import { connect } from 'react-redux';
import App from '../components/App';
import { getMeetupApi } from '../api/api';

const mapStateToProps = state => {
  return {
    cityData: state.cityDataReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad() {
      getMeetupApi().then(data => {
        dispatch({ type: 'INITIAILIZE_PAGE', data });
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
