import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function postsReducer(state = {}, action) {
  const { payload } = action;
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(payload, 'id');
    case FETCH_POST:
      return {
        [payload.id]: payload
      };
    default:
      return state;
  }
}

// [{ id: 147569, ... }, {...}]
// { 147569: { id: 147569, ... }, {...}}
