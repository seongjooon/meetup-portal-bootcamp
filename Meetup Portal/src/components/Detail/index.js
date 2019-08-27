import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadEventData } from '../../redux/event/ducks';

class Detail extends Component {
  componentDidMount() {
    this.props.loadEventData();
  }

  render() {
    const { eventData } = this.props;
    return (
      <>
        {eventData.length ? (
          <div className='city-box'>
            <div>
              {eventData.map(eventEL => (
                <div key={eventEL.id}>
                  <div>이벤트 이름: {eventEL.name}</div>
                  <div>
                    날짜/시간: {`${eventEL.local_date}/${eventEL.local_time}`}
                  </div>
                  <div>그룹 이름: {eventEL.group.name}</div>
                  <div>RSVP 인원: {eventEL.yes_rsvp_count}</div>
                  <div>호스트 이름: {eventEL.urlname}</div>
                  <div>호스트 사진: {null}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = ({ eventData }) => ({ eventData });
const mapDispatchToProps = { loadEventData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
