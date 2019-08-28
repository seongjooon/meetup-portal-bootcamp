import React from 'react';
import { shallow } from 'enzyme';
import EventList from './EventList';

describe('<EventList /> Component', () => {
  let eventList = [];

  beforeEach(() => {
    eventList = [
      {
        id: '019238',
        name: 'hayake',
        local_date: '2019-11-03',
        local_time: '09:00',
        yes_rsvp_count: 3,
        group: { name: 'huhuh' }
      }
    ];
  });

  it('should be rendered <div class="bookmark-element"> as long as the length of the eventlist which is props.', () => {
    let wrapper = shallow(<EventList eventList={eventList} />);
    expect(wrapper.find('.bookmark-element').length).toBe(1);

    eventList.push({
      id: '102938',
      name: 'kamake',
      local_date: '2019-12-11',
      local_time: '09:00',
      yes_rsvp_count: 3,
      group: { name: 'alskdj' }
    });

    wrapper = shallow(<EventList eventList={eventList} />);
    expect(wrapper.find('.bookmark-element').length).toBe(2);
  });
});
