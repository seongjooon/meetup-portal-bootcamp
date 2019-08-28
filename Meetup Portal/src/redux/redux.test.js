import {
  initialState,
  eventListReducer,
  bookmarkReducer
} from './index';
import {
  LOAD_EVENT,
  BOOKMARK_EVENTS_LOAD,
  BOOKMARK_EVENTS_UPDATE
} from '../constant/constants';

describe('redux test', () => {
  it('should return init value', () => {
    expect(initialState).toHaveProperty('eventList');
    expect(initialState.eventList).toEqual([]);
    expect(eventListReducer(undefined, {})).toEqual(initialState.eventList);
    expect(bookmarkReducer(undefined, {})).toEqual(initialState.bookmarkList);
  });

  describe('action data test', () => {
    it('eventList action test', () => {
      expect(
        eventListReducer(initialState.eventList, {
          type: LOAD_EVENT,
          data: [
            {
              id: '264072267',
              name: 'NYC Marathon',
              local_date: '2019-11-03',
              local_time: '09:00',
              yes_rsvp_count: 3,
              group: { name: 'huhuh' }
            }
          ]
        })
      ).toEqual([
        {
          id: '264072267',
          name: 'NYC Marathon',
          local_date: '2019-11-03',
          local_time: '09:00',
          yes_rsvp_count: 3,
          group: { name: 'huhuh' }
        }
      ]);
    });

    it('bookmarkList action test', () => {
      expect(
        bookmarkReducer(initialState.bookmarkList, {
          type: BOOKMARK_EVENTS_LOAD,
          events: [
            {
              id: '019238',
              name: 'kamake',
              local_date: '2019-11-03',
              local_time: '09:00',
              yes_rsvp_count: 3,
              group: { name: 'huhuh' }
            }
          ]
        })
      ).toEqual([
        {
          id: '019238',
          name: 'kamake',
          local_date: '2019-11-03',
          local_time: '09:00',
          yes_rsvp_count: 3,
          group: { name: 'huhuh' }
        }
      ]);

      expect(
        bookmarkReducer(
          [
            {
              id: '019238',
              name: 'kamake',
              local_date: '2019-11-03',
              local_time: '09:00',
              yes_rsvp_count: 3,
              group: { name: 'huhuh' }
            }
          ],
          {
            type: BOOKMARK_EVENTS_UPDATE,
            events: [
              {
                id: '102938',
                name: 'hayake',
                local_date: '2019-12-11',
                local_time: '09:00',
                yes_rsvp_count: 3,
                group: { name: 'alskdj' }
              }
            ]
          }
        )
      ).toEqual([
        {
          id: '102938',
          name: 'hayake',
          local_date: '2019-12-11',
          local_time: '09:00',
          yes_rsvp_count: 3,
          group: { name: 'alskdj' }
        }
      ]);

      expect(
        bookmarkReducer(
          [
            {
              id: '019238',
              name: 'kamake',
              local_date: '2019-11-03',
              local_time: '09:00',
              yes_rsvp_count: 3,
              group: { name: 'huhuh' }
            }
          ],
          {
            type: BOOKMARK_EVENTS_UPDATE,
            events: [
              {
                id: '019238',
                name: 'kamake',
                local_date: '2019-11-03',
                local_time: '09:00',
                yes_rsvp_count: 3,
                group: { name: 'huhuh' }
              },
              {
                id: '102938',
                name: 'hayake',
                local_date: '2019-12-11',
                local_time: '09:00',
                yes_rsvp_count: 3,
                group: { name: 'alskdj' }
              }
            ]
          }
        )
      ).toEqual([
        {
          id: '019238',
          name: 'kamake',
          local_date: '2019-11-03',
          local_time: '09:00',
          yes_rsvp_count: 3,
          group: { name: 'huhuh' }
        },
        {
          id: '102938',
          name: 'hayake',
          local_date: '2019-12-11',
          local_time: '09:00',
          yes_rsvp_count: 3,
          group: { name: 'alskdj' }
        }
      ]);
    });
  });
});
