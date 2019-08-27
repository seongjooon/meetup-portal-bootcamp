import { connect } from 'react-redux';
import App from '../components/App';
import { getMeetupApi } from '../api/api';

const mapStateToProps = state => {
  return {
    eventList: state.eventList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad() {
      getMeetupApi().then(data => {
        dispatch({ type: 'LOAD_EVENT', data });
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
