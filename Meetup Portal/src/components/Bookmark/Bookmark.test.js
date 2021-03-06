import React from 'react';
import { shallow } from 'enzyme';
import Bookmark from './Bookmark';

describe('<Bookmark /> Component', () => {
  let bookmarkList = [];

  beforeEach(() => {
    bookmarkList = [
      {
        id: '019238',
        name: 'kamake',
        local_date: '2019-11-03',
        local_time: '09:00',
        yes_rsvp_count: 3,
        group: { name: 'huhuh' }
      }
    ];
  });

  it('should be rendered <div class="bookmark-element"> as long as the length of the bookmarklist which is props.', () => {
    let wrapper = shallow(<Bookmark bookmarkList={bookmarkList} />);
    expect(wrapper.find('.bookmark-element').length).toBe(1);

    bookmarkList.push({
      id: '102938',
      name: 'hayake',
      local_date: '2019-12-11',
      local_time: '09:00',
      yes_rsvp_count: 3,
      group: { name: 'alskdj' }
    });

    wrapper = shallow(<bookmarkList bookmarkList={bookmarkList} />);
    expect(wrapper.find('.bookmark-element').length).toBe(2);
  });
});
